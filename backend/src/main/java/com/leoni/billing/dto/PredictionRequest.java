package com.leoni.billing.dto;

import lombok.Data;
import java.util.List;

@Data
public class PredictionRequest {
    private List<Long> invoiceIds;
}
