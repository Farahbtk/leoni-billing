package com.leoni.billing.controller;

import com.leoni.billing.dto.DashboardKpiDto;
import com.leoni.billing.dto.MonthlyDataDto;
import com.leoni.billing.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/kpis")
    public ResponseEntity<DashboardKpiDto> getKpis() {
        return ResponseEntity.ok(dashboardService.getKpis());
    }

    @GetMapping("/monthly")
    public ResponseEntity<List<MonthlyDataDto>> getMonthly() {
        return ResponseEntity.ok(dashboardService.getMonthlyData());
    }
}
