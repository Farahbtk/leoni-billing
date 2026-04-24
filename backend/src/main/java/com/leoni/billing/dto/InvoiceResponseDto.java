package com.leoni.billing.dto;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.leoni.billing.entity.Invoice;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class InvoiceResponseDto {

    private Long id;
    private String invoiceNumber;
    private Long clientId;
    private String clientName;
    private BigDecimal amount;
    private String currency;
    private LocalDate issueDate;
    private LocalDate dueDate;
    private LocalDate paymentDate;
    private Invoice.InvoiceStatus status;
    private BigDecimal riskScore;
    private Invoice.RiskLevel riskLevel;
    private Integer daysOverdue;
    private Integer paymentTerms;
    private String description;
    private List<ShapFactorDto> shapExplanation;

    @Data
    @Builder
    public static class ShapFactorDto {
        private String feature;
        private double value;
        private double impact;
    }

    private static final ObjectMapper MAPPER = new ObjectMapper();

    public static InvoiceResponseDto from(Invoice invoice) {
        List<ShapFactorDto> shap = null;
        if (invoice.getShapExplanationJson() != null) {
            try {
                shap = MAPPER.readValue(invoice.getShapExplanationJson(),
                        new TypeReference<List<ShapFactorDto>>() {});
            } catch (Exception ignored) {}
        }

        return InvoiceResponseDto.builder()
                .id(invoice.getId())
                .invoiceNumber(invoice.getInvoiceNumber())
                .clientId(invoice.getClient() != null ? invoice.getClient().getId() : null)
                .clientName(invoice.getClient() != null ? invoice.getClient().getName() : null)
                .amount(invoice.getAmount())
                .currency(invoice.getCurrency())
                .issueDate(invoice.getIssueDate())
                .dueDate(invoice.getDueDate())
                .paymentDate(invoice.getPaymentDate())
                .status(invoice.getStatus())
                .riskScore(invoice.getRiskScore())
                .riskLevel(invoice.getRiskLevel())
                .daysOverdue(invoice.getDaysOverdue())
                .paymentTerms(invoice.getPaymentTerms())
                .description(invoice.getDescription())
                .shapExplanation(shap)
                .build();
    }
}
