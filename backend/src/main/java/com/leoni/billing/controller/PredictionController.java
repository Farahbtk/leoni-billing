package com.leoni.billing.controller;

import com.leoni.billing.dto.InvoiceResponseDto;
import com.leoni.billing.dto.PredictionRequest;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.service.PredictionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/predictions")
public class PredictionController {

    private final PredictionService predictionService;

    public PredictionController(PredictionService predictionService) {
        this.predictionService = predictionService;
    }

    @PostMapping("/run")
    public ResponseEntity<List<InvoiceResponseDto>> runPrediction(
            @RequestBody PredictionRequest request) {
        List<Invoice> updated = predictionService.runPrediction(request.getInvoiceIds());
        List<InvoiceResponseDto> dtos = updated.stream()
                .map(InvoiceResponseDto::from)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/run")
    public ResponseEntity<List<InvoiceResponseDto>> runAllPredictions() {
        List<Invoice> highRisk = predictionService.runPredictionOnAllAndReturnHighRisk();
        List<InvoiceResponseDto> dtos = highRisk.stream()
                .map(InvoiceResponseDto::from)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }
}
