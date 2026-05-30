package com.leoni.billing.controller;

import com.leoni.billing.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    private final UserRepository userRepository;

    public HealthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<Map<String, String>> health() {
        String dbStatus;
        try {
            userRepository.count();
            dbStatus = "UP";
        } catch (Exception e) {
            dbStatus = "DOWN";
        }
        return ResponseEntity.ok(Map.of(
            "backend",   "UP",
            "database",  dbStatus,
            "mlService", "UP"
        ));
    }
}
