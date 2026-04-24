package com.leoni.billing.service;

import com.leoni.billing.dto.DashboardKpiDto;
import com.leoni.billing.dto.MonthlyDataDto;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.repository.ClientRepository;
import com.leoni.billing.repository.InvoiceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class DashboardService {

    private final InvoiceRepository invoiceRepo;
    private final ClientRepository clientRepo;

    public DashboardService(InvoiceRepository invoiceRepo, ClientRepository clientRepo) {
        this.invoiceRepo = invoiceRepo;
        this.clientRepo = clientRepo;
    }

    public DashboardKpiDto getKpis() {
        List<Invoice> all = invoiceRepo.findAll();

        long totalInvoices = all.size();
        long overdueInvoices = all.stream()
                .filter(i -> i.getStatus() == Invoice.InvoiceStatus.OVERDUE).count();
        long highRiskCount = all.stream()
                .filter(i -> i.getRiskLevel() == Invoice.RiskLevel.HIGH).count();

        BigDecimal totalRevenue = all.stream()
                .filter(i -> i.getStatus() == Invoice.InvoiceStatus.PAID)
                .map(Invoice::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal overdueAmount = all.stream()
                .filter(i -> i.getStatus() == Invoice.InvoiceStatus.OVERDUE)
                .map(Invoice::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal pendingAmount = all.stream()
                .filter(i -> i.getStatus() == Invoice.InvoiceStatus.PENDING)
                .map(Invoice::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalAmount = all.stream()
                .map(Invoice::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        double collectionRate = totalAmount.compareTo(BigDecimal.ZERO) == 0 ? 0.0 :
                totalRevenue.divide(totalAmount, 4, RoundingMode.HALF_UP)
                        .doubleValue() * 100.0;

        double averageDso = clientRepo.findAll().stream()
                .filter(c -> c.getAverageDso() != null)
                .mapToDouble(c -> c.getAverageDso().doubleValue())
                .average()
                .orElse(0.0);

        return DashboardKpiDto.builder()
                .totalInvoices(totalInvoices)
                .totalRevenue(totalRevenue)
                .overdueInvoices(overdueInvoices)
                .overdueAmount(overdueAmount)
                .averageDso(averageDso)
                .collectionRate(collectionRate)
                .pendingAmount(pendingAmount)
                .highRiskCount(highRiskCount)
                .build();
    }

    public List<MonthlyDataDto> getMonthlyData() {
        List<Object[]> rows = invoiceRepo.findMonthlyData();
        return rows.stream()
                .map(r -> new MonthlyDataDto(
                        (String) r[0],
                        r[1] != null ? new BigDecimal(r[1].toString()) : BigDecimal.ZERO,
                        r[2] != null ? new BigDecimal(r[2].toString()) : BigDecimal.ZERO
                ))
                .collect(Collectors.toList());
    }
}
