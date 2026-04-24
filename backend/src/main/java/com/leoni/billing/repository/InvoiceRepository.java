package com.leoni.billing.repository;

import com.leoni.billing.entity.Invoice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDate;
import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    @Query("""
        SELECT i FROM Invoice i JOIN i.client c
        WHERE (:status IS NULL OR i.status = :status)
          AND (:riskLevel IS NULL OR i.riskLevel = :riskLevel)
          AND (:clientId IS NULL OR c.id = :clientId)
          AND (:dateFrom IS NULL OR i.issueDate >= :dateFrom)
          AND (:dateTo IS NULL OR i.issueDate <= :dateTo)
          AND (:search IS NULL OR LOWER(i.invoiceNumber) LIKE LOWER(CONCAT('%',:search,'%'))
               OR LOWER(c.name) LIKE LOWER(CONCAT('%',:search,'%')))
        """)
    Page<Invoice> findWithFilters(
        @Param("status")    Invoice.InvoiceStatus status,
        @Param("riskLevel") Invoice.RiskLevel riskLevel,
        @Param("clientId")  Long clientId,
        @Param("dateFrom")  LocalDate dateFrom,
        @Param("dateTo")    LocalDate dateTo,
        @Param("search")    String search,
        Pageable pageable
    );

    List<Invoice> findByStatus(Invoice.InvoiceStatus status);

    List<Invoice> findByRiskLevel(Invoice.RiskLevel riskLevel);

    @Query("SELECT i FROM Invoice i WHERE i.status = 'OVERDUE' OR i.riskLevel = 'HIGH' ORDER BY i.riskScore DESC")
    List<Invoice> findOverdueOrHighRisk();

    @Query(value = """
            SELECT DATE_FORMAT(i.issue_date, '%b %Y') AS month,
                   SUM(i.amount)                       AS invoiced,
                   SUM(CASE WHEN i.status = 'PAID' THEN i.amount ELSE 0 END) AS collected
            FROM invoices i
            WHERE i.issue_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
            GROUP BY DATE_FORMAT(i.issue_date, '%Y-%m'), DATE_FORMAT(i.issue_date, '%b %Y')
            ORDER BY MIN(i.issue_date)
            """, nativeQuery = true)
    List<Object[]> findMonthlyData();
}
