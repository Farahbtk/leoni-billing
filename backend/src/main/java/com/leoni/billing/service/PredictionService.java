package com.leoni.billing.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.leoni.billing.dto.PredictionResult;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
public class PredictionService {

    private final InvoiceRepository invoiceRepo;
    private final ObjectMapper objectMapper;
    private final RestTemplate restTemplate;

    @Value("${app.ml.url}")
    private String mlUrl;

    public PredictionService(InvoiceRepository invoiceRepo, ObjectMapper objectMapper) {
        this.invoiceRepo = invoiceRepo;
        this.objectMapper = objectMapper;
        this.restTemplate = new RestTemplate();
    }

    public List<Invoice> runPredictionOnAllAndReturnHighRisk() {
        List<Invoice> invoices = invoiceRepo.findAll();
        applyRuleBasedPredictions(invoices);
        List<Invoice> saved = invoiceRepo.saveAll(invoices);
        return saved.stream()
                .filter(i -> i.getRiskScore() != null && i.getRiskScore().doubleValue() > 70)
                .collect(Collectors.toList());
    }

    public List<Invoice> runPrediction(List<Long> invoiceIds) {
        List<Invoice> invoices = invoiceRepo.findAllById(invoiceIds);

        List<Map<String, Object>> features = invoices.stream()
                .map(this::extractFeatures)
                .collect(Collectors.toList());

        Map<String, Object> payload = new HashMap<>();
        payload.put("invoices", features);

        try {
            ResponseEntity<List<Object>> response = restTemplate.exchange(
                    mlUrl + "/predict", HttpMethod.POST,
                    new HttpEntity<>(payload),
                    new ParameterizedTypeReference<List<Object>>() {});

            if (response.getBody() != null) {
                List<PredictionResult> results = objectMapper.convertValue(
                        response.getBody(), new TypeReference<List<PredictionResult>>() {});
                applyMlPredictions(invoices, results);
            }
        } catch (Exception e) {
            // ML service unavailable — fall back to rule-based scoring
            applyRuleBasedPredictions(invoices);
        }

        return invoiceRepo.saveAll(invoices);
    }

    // ── helpers ────────────────────────────────────────────────────────────────

    private Map<String, Object> extractFeatures(Invoice invoice) {
        Map<String, Object> f = new HashMap<>();
        f.put("invoice_id", invoice.getId());
        f.put("amount", invoice.getAmount());
        f.put("payment_terms", invoice.getPaymentTerms() != null ? invoice.getPaymentTerms() : 30);
        f.put("days_overdue", invoice.getDaysOverdue() != null ? invoice.getDaysOverdue() : 0);
        f.put("client_avg_dso", invoice.getClient().getAverageDso() != null
                ? invoice.getClient().getAverageDso() : 30);
        f.put("client_overdue_count", invoice.getClient().getOverdueCount() != null
                ? invoice.getClient().getOverdueCount() : 0);
        f.put("client_risk_profile", invoice.getClient().getRiskProfile().name());
        return f;
    }

    private void applyMlPredictions(List<Invoice> invoices, List<PredictionResult> results) {
        Map<Long, PredictionResult> byId = results.stream()
                .collect(Collectors.toMap(PredictionResult::getInvoiceId, r -> r));

        for (Invoice invoice : invoices) {
            PredictionResult result = byId.get(invoice.getId());
            if (result == null) continue;

            double scorePct = result.getRiskScore() * 100;
            invoice.setRiskScore(BigDecimal.valueOf(scorePct).setScale(2, RoundingMode.HALF_UP));
            invoice.setRiskLevel(Invoice.RiskLevel.valueOf(result.getRiskLevel()));

            if (result.getShapFactors() != null) {
                try {
                    invoice.setShapExplanationJson(objectMapper.writeValueAsString(result.getShapFactors()));
                } catch (Exception ignored) {}
            }
        }
    }

    private void applyRuleBasedPredictions(List<Invoice> invoices) {
        for (Invoice invoice : invoices) {
            double score = computeScore(invoice);
            invoice.setRiskScore(BigDecimal.valueOf(score).setScale(2, RoundingMode.HALF_UP));
            invoice.setRiskLevel(toRiskLevel(score));
        }
    }

    private double computeScore(Invoice invoice) {
        double score = 10.0; // base

        // Days overdue (up to 40 pts)
        int daysOverdue = invoice.getDaysOverdue() != null ? invoice.getDaysOverdue() : 0;
        score += Math.min(40.0, daysOverdue * 1.3);

        // Client risk profile (up to 30 pts)
        score += switch (invoice.getClient().getRiskProfile()) {
            case HIGH   -> 30.0;
            case MEDIUM -> 15.0;
            case LOW    ->  5.0;
        };

        // Client overdue history (up to 20 pts)
        int overdueCount = invoice.getClient().getOverdueCount() != null
                ? invoice.getClient().getOverdueCount() : 0;
        score += Math.min(20.0, overdueCount * 2.5);

        // Payment terms length (longer = more uncertainty, up to 10 pts)
        int terms = invoice.getPaymentTerms() != null ? invoice.getPaymentTerms() : 30;
        score += Math.min(10.0, (terms - 30) * 0.2);

        return Math.min(100.0, score);
    }

    private Invoice.RiskLevel toRiskLevel(double score) {
        if (score >= 66) return Invoice.RiskLevel.HIGH;
        if (score >= 33) return Invoice.RiskLevel.MEDIUM;
        return Invoice.RiskLevel.LOW;
    }
}
