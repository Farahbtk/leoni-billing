package com.leoni.billing.service;

import com.leoni.billing.entity.Invoice;
import com.leoni.billing.repository.InvoiceRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@Transactional
public class InvoiceService {

    private final InvoiceRepository repo;

    public InvoiceService(InvoiceRepository repo) {
        this.repo = repo;
    }

    @Transactional(readOnly = true)
    public Page<Invoice> findAll(Invoice.InvoiceStatus status, Invoice.RiskLevel riskLevel,
                                  Long clientId, LocalDate dateFrom, LocalDate dateTo,
                                  String search, int page, int size) {
        return repo.findWithFilters(status, riskLevel, clientId, dateFrom, dateTo, search,
            PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "issueDate")));
    }

    @Transactional(readOnly = true)
    public Invoice findById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Invoice not found: " + id));
    }

    public Invoice save(Invoice invoice) {
        updateDaysOverdue(invoice);
        return repo.save(invoice);
    }

    public Invoice update(Long id, Invoice updated) {
        Invoice existing = findById(id);
        existing.setAmount(updated.getAmount());
        existing.setDueDate(updated.getDueDate());
        existing.setStatus(updated.getStatus());
        existing.setDescription(updated.getDescription());
        updateDaysOverdue(existing);
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<Invoice> findOverdue() {
        return repo.findByStatus(Invoice.InvoiceStatus.OVERDUE);
    }

    @Transactional(readOnly = true)
    public List<Invoice> findHighRisk() {
        return repo.findByRiskLevel(Invoice.RiskLevel.HIGH);
    }

    private void updateDaysOverdue(Invoice invoice) {
        if (invoice.getStatus() == Invoice.InvoiceStatus.OVERDUE) {
            long days = ChronoUnit.DAYS.between(invoice.getDueDate(), LocalDate.now());
            invoice.setDaysOverdue((int) Math.max(0, days));
        }
    }
}
