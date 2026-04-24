package com.leoni.billing.controller;

import com.leoni.billing.dto.InvoiceResponseDto;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.service.InvoiceService;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<InvoiceResponseDto> create(@RequestBody Invoice invoice) {
        return ResponseEntity.ok(InvoiceResponseDto.from(invoiceService.save(invoice)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvoiceResponseDto> update(@PathVariable Long id,
                                                      @RequestBody Invoice invoice) {
        return ResponseEntity.ok(InvoiceResponseDto.from(invoiceService.update(id, invoice)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        invoiceService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/overdue")
    public ResponseEntity<List<InvoiceResponseDto>> getOverdue() {
        List<InvoiceResponseDto> dtos = invoiceService.findOverdue().stream()
                .map(InvoiceResponseDto::from).collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/high-risk")
    public ResponseEntity<List<InvoiceResponseDto>> getHighRisk() {
        List<InvoiceResponseDto> dtos = invoiceService.findHighRisk().stream()
                .map(InvoiceResponseDto::from).collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }
}
