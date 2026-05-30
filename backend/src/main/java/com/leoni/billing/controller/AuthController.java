package com.leoni.billing.controller;

import com.leoni.billing.dto.ForgotPasswordRequest;
import com.leoni.billing.dto.JwtResponse;
import com.leoni.billing.dto.LoginRequest;
import com.leoni.billing.dto.ResetPasswordRequest;
import com.leoni.billing.entity.User;
import com.leoni.billing.repository.UserRepository;
import com.leoni.billing.security.JwtTokenProvider;
import com.leoni.billing.service.PasswordResetService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtTokenProvider tokenProvider;
    private final UserRepository userRepository;
    private final PasswordResetService passwordResetService;

    public AuthController(AuthenticationManager authManager, JwtTokenProvider tokenProvider,
                          UserRepository userRepository, PasswordResetService passwordResetService) {
        this.authManager          = authManager;
        this.tokenProvider        = tokenProvider;
        this.userRepository       = userRepository;
        this.passwordResetService = passwordResetService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest req) {
        try {
            Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
            String token = tokenProvider.generateToken(auth);

            UserDetails principal = (UserDetails) auth.getPrincipal();
            User user = userRepository.findByEmail(principal.getUsername()).orElseThrow();

            return ResponseEntity.ok(new JwtResponse(
                token,
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole().name()
            ));
        } catch (DisabledException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "Account is deactivated. Contact your administrator."));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "Invalid email or password"));
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest req) {
        try {
            passwordResetService.generateCode(req.getEmail());
            return ResponseEntity.ok(Map.of(
                "message", "Reset code sent to your email"
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "No account found with this email"));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest req) {
        try {
            passwordResetService.resetPassword(req.getEmail(), req.getCode(), req.getNewPassword());
            return ResponseEntity.ok(Map.of("message", "Password reset successfully"));
        } catch (Exception e) {
            String msg = e.getMessage() != null ? e.getMessage() : "Invalid or expired reset code";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", msg));
        }
    }
}
