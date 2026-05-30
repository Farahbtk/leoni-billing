package com.leoni.billing.controller;

import com.leoni.billing.dto.InvoiceResponseDto;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.service.InvoiceService;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @GetMapping
    public ResponseEntity<Page<InvoiceResponseDto>> getAll(
            @RequestParam(required = false) Invoice.InvoiceStatus status,
            @RequestParam(required = false) Invoice.RiskLevel riskLevel,
            @RequestParam(required = false) Long clientId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateFrom,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateTo,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        Page<InvoiceResponseDto> result = invoiceService
                .findAll(status, riskLevel, clientId, dateFrom, dateTo, search, page, size)
                .map(InvoiceResponseDto::from);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponseDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(InvoiceResponseDto.from(invoiceService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<InvoiceResponseDto> create(@Valid @RequestBody Invoice invoice) {
        return ResponseEntity.ok(InvoiceResponseDto.from(invoiceService.save(invoice)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvoiceResponseDto> update(@PathVariable Long id, @Valid @RequestBody Invoice invoice) {
        return ResponseEntity.ok(InvoiceResponseDto.from(invoiceService.update(id, invoice)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        invoiceService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/overdue")
    public ResponseEntity<List<InvoiceResponseDto>> getOverdue() {
        return ResponseEntity.ok(invoiceService.findOverdue().stream()
                .map(InvoiceResponseDto::from).collect(Collectors.toList()));
    }

    @GetMapping("/high-risk")
    public ResponseEntity<List<InvoiceResponseDto>> getHighRisk() {
        return ResponseEntity.ok(invoiceService.findHighRisk().stream()
                .map(InvoiceResponseDto::from).collect(Collectors.toList()));
    }

    @GetMapping("/export")
    public ResponseEntity<byte[]> exportCsv() {
        List<Invoice> invoices = invoiceService.findAllForExport();
        StringBuilder csv = new StringBuilder("ID,Invoice #,Client,Amount,Currency,Issue Date,Due Date,Status,Risk Score\n");
        for (Invoice inv : invoices) {
            csv.append(String.join(",",
                String.valueOf(inv.getId()),
                inv.getInvoiceNumber(),
                "\"" + inv.getClient().getName() + "\"",
                inv.getAmount().toPlainString(),
                inv.getCurrency() != null ? inv.getCurrency() : "EUR",
                inv.getIssueDate().toString(),
                inv.getDueDate().toString(),
                inv.getStatus().name(),
                inv.getRiskScore() != null ? inv.getRiskScore().toPlainString() : "N/A"
            )).append("\n");
        }
        byte[] bytes = csv.toString().getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "text/csv; charset=UTF-8")
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=invoices.csv")
                .contentLength(bytes.length)
                .body(bytes);
    }
}
