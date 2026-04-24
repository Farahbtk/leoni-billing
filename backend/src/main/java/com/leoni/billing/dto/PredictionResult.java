package com.leoni.billing.dto;

import lombok.Data;

import java.util.List;

@Data
public class PredictionResult {
    private Long invoiceId;
    private double riskScore;
    private String riskLevel;
    private List<ShapFactor> shapFactors;

    @Data
    public static class ShapFactor {
        private String feature;
        private double value;
        private double impact;
    }
}
