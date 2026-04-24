package com.leoni.billing.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MonthlyDataDto {
    private String month;
    private BigDecimal invoiced;
    private BigDecimal collected;
}
