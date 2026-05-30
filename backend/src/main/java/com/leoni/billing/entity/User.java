package com.leoni.billing.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status = Status.ACTIVE;

    private String department;
    private String jobTitle;
    private String phone;

    @Column(nullable = false, updatable = false, columnDefinition = "DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)")
    private LocalDateTime createdAt;

    @PrePersist
    void onCreate() {
        if (this.createdAt == null) this.createdAt = LocalDateTime.now();
    }

    public enum Role { ADMIN, BILLING_MANAGER }
    public enum Status { ACTIVE, INACTIVE }
}
