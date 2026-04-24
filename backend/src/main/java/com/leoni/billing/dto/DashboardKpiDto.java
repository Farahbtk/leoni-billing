package com.leoni.billing.dto;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;

@Data @Builder
public class DashboardKpiDto {
    private long totalInvoices;
    private BigDecimal totalRevenue;
    private long overdueInvoices;
    private BigDecimal overdueAmount;
    private double averageDso;
    private double collectionRate;
    private BigDecimal pendingAmount;
    private long highRiskCount;
}
