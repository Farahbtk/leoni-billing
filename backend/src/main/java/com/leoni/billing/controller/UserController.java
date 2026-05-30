package com.leoni.billing.controller;

import com.leoni.billing.dto.ChangePasswordRequest;
import com.leoni.billing.dto.UpdateProfileRequest;
import com.leoni.billing.dto.UserDto;
import com.leoni.billing.dto.UserStatsDto;
import com.leoni.billing.service.UserProfileService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserProfileService userProfileService;

    public UserController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> getMe(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userProfileService.getUserProfile(userDetails.getUsername()));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserDto> updateProfile(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody UpdateProfileRequest req) {
        return ResponseEntity.ok(userProfileService.updateProfile(userDetails.getUsername(), req));
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody ChangePasswordRequest req) {
        try {
            userProfileService.changePassword(userDetails.getUsername(), req);
            return ResponseEntity.ok(Map.of("message", "Password updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message",
                    e.getMessage() != null ? e.getMessage() : "Failed to update password"));
        }
    }

    @GetMapping("/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserStatsDto> getStats() {
        return ResponseEntity.ok(userProfileService.getStats());
    }
}
