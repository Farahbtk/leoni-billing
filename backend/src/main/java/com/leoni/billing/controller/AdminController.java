package com.leoni.billing.controller;

import com.leoni.billing.dto.CreateUserRequest;
import com.leoni.billing.dto.UpdateUserRequest;
import com.leoni.billing.dto.UserDto;
import com.leoni.billing.service.AdminUserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminUserService adminUserService;

    public AdminController(AdminUserService adminUserService) {
        this.adminUserService = adminUserService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllManagers() {
        return ResponseEntity.ok(adminUserService.getAllManagers());
    }

    @PostMapping("/users")
    public ResponseEntity<UserDto> createManager(@Valid @RequestBody CreateUserRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(adminUserService.createManager(req));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserDto> updateManager(@PathVariable Long id,
                                                  @Valid @RequestBody UpdateUserRequest req) {
        return ResponseEntity.ok(adminUserService.updateManager(id, req));
    }

    @PutMapping("/users/{id}/status")
    public ResponseEntity<UserDto> toggleStatus(@PathVariable Long id) {
        return ResponseEntity.ok(adminUserService.toggleStatus(id));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteManager(@PathVariable Long id) {
        adminUserService.deleteManager(id);
        return ResponseEntity.noContent().build();
    }
}
