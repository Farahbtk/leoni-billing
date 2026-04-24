package com.leoni.billing.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "clients")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, length = 10)
    private String code;

    private String country;
    private String industry;

    @Column(nullable = false)
    private String contactEmail;

    private String contactPhone;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, columnDefinition = "VARCHAR(10) DEFAULT 'ACTIVE'")
    private Status status = Status.ACTIVE;

    private LocalDate collaborationSince;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "VARCHAR(12) DEFAULT 'ONGOING'")
    private CollaborationState collaborationState = CollaborationState.ONGOING;

    @Column(precision = 15, scale = 2)
    private BigDecimal creditLimit;

    private Integer paymentTermsDays;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, columnDefinition = "VARCHAR(10) DEFAULT 'LOW'")
    private RiskProfile riskProfile;

    @Column(precision = 5, scale = 2)
    private BigDecimal averageDso;

    @Column(precision = 15, scale = 2)
    private BigDecimal totalOutstanding;

    @Column(precision = 15, scale = 2)
    private BigDecimal totalPaid;

    private Integer invoiceCount;
    private Integer overdueCount;
    private LocalDate lastPaymentDate;

    public enum Status { ACTIVE, INACTIVE }
    public enum CollaborationState { ONGOING, SUSPENDED, TERMINATED }
    public enum RiskProfile { LOW, MEDIUM, HIGH }
}
