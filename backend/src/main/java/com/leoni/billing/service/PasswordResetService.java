package com.leoni.billing.service;

import com.leoni.billing.entity.PasswordResetToken;
import com.leoni.billing.entity.User;
import com.leoni.billing.repository.PasswordResetTokenRepository;
import com.leoni.billing.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@Transactional
public class PasswordResetService {

    private final PasswordResetTokenRepository tokenRepo;
    private final UserRepository userRepo;
    private final PasswordEncoder encoder;

    public PasswordResetService(PasswordResetTokenRepository tokenRepo,
                                UserRepository userRepo,
                                PasswordEncoder encoder) {
        this.tokenRepo = tokenRepo;
        this.userRepo  = userRepo;
        this.encoder   = encoder;
    }

    public String generateCode(String email) {
        userRepo.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "No account found with this email"));
        tokenRepo.deleteByEmail(email);
        String code = String.format("%06d", new Random().nextInt(1_000_000));
        tokenRepo.save(PasswordResetToken.builder()
                .email(email)
                .code(code)
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .build());
        return code;
    }

    public void resetPassword(String email, String code, String newPassword) {
        PasswordResetToken token = tokenRepo.findByEmailAndCodeAndUsedFalse(email, code)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Invalid or expired reset code"));
        if (token.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Reset code has expired");
        }
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        user.setPassword(encoder.encode(newPassword));
        userRepo.save(user);
        token.setUsed(true);
        tokenRepo.save(token);
    }
}
