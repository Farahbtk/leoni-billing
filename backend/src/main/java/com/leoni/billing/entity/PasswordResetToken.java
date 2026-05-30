package com.leoni.billing.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "password_reset_tokens")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordResetToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false, length = 6)
    private String code;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "TINYINT(1) DEFAULT 0")
    private boolean used = false;
}
