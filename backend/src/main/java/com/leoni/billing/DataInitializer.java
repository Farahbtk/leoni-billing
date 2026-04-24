package com.leoni.billing;

import com.leoni.billing.entity.Client;
import com.leoni.billing.entity.Invoice;
import com.leoni.billing.entity.User;
import com.leoni.billing.repository.ClientRepository;
import com.leoni.billing.repository.InvoiceRepository;
import com.leoni.billing.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepo;
    private final ClientRepository clientRepo;
    private final InvoiceRepository invoiceRepo;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepo, ClientRepository clientRepo,
                           InvoiceRepository invoiceRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.clientRepo = clientRepo;
        this.invoiceRepo = invoiceRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        seedAdmin();
        seedManagers();
        if (clientRepo.count() == 0) {
            seedClientsAndInvoices();
        }
    }

    // ── Admin user ─────────────────────────────────────────────────────────────

    private void seedAdmin() {
        userRepo.findByEmail("admin@leoni.com").ifPresentOrElse(existing -> {
            // Repair old rows that have empty firstName/lastName from pre-RBAC schema
            if (existing.getFirstName() == null || existing.getFirstName().isBlank()) {
                existing.setFirstName("Admin");
                existing.setLastName("LEONI");
                existing.setRole(User.Role.ADMIN);
                existing.setStatus(User.Status.ACTIVE);
                existing.setDepartment("IT");
                userRepo.save(existing);
            }
        }, () -> userRepo.save(User.builder()
                .firstName("Admin")
                .lastName("LEONI")
                .email("admin@leoni.com")
                .password(passwordEncoder.encode("admin123"))
                .role(User.Role.ADMIN)
                .status(User.Status.ACTIVE)
                .department("IT")
                .createdAt(LocalDateTime.now())
                .build()));
    }

    // ── Sample billing managers ────────────────────────────────────────────────

    private void seedManagers() {
        if (userRepo.findByRole(User.Role.BILLING_MANAGER).isEmpty()) {
            userRepo.saveAll(List.of(
                User.builder()
                    .firstName("Sarah").lastName("Johnson")
                    .email("s.johnson@leoni.com")
                    .password(passwordEncoder.encode("manager123"))
                    .role(User.Role.BILLING_MANAGER).status(User.Status.ACTIVE)
                    .department("Customer Billing").createdAt(LocalDateTime.now().minusDays(45)).build(),
                User.builder()
                    .firstName("Mohamed").lastName("Ben Ali")
                    .email("m.benali@leoni.com")
                    .password(passwordEncoder.encode("manager123"))
                    .role(User.Role.BILLING_MANAGER).status(User.Status.ACTIVE)
                    .department("Accounts Receivable").createdAt(LocalDateTime.now().minusDays(30)).build(),
                User.builder()
                    .firstName("Amira").lastName("Trabelsi")
                    .email("a.trabelsi@leoni.com")
                    .password(passwordEncoder.encode("manager123"))
                    .role(User.Role.BILLING_MANAGER).status(User.Status.ACTIVE)
                    .department("Customer Billing").createdAt(LocalDateTime.now().minusDays(20)).build(),
                User.builder()
                    .firstName("Karim").lastName("Mansour")
                    .email("k.mansour@leoni.com")
                    .password(passwordEncoder.encode("manager123"))
                    .role(User.Role.BILLING_MANAGER).status(User.Status.INACTIVE)
                    .department("Finance").createdAt(LocalDateTime.now().minusDays(90)).build(),
                User.builder()
                    .firstName("Lena").lastName("Müller")
                    .email("l.muller@leoni.com")
                    .password(passwordEncoder.encode("manager123"))
                    .role(User.Role.BILLING_MANAGER).status(User.Status.ACTIVE)
                    .department("Collections").createdAt(LocalDateTime.now().minusDays(10)).build()
            ));
        }
    }

    // ── Clients + invoices ────────────────────────────────────────────────────

    private void seedClientsAndInvoices() {
        boolean needsReseed = clientRepo.count() == 0 ||
                clientRepo.findAll().stream().anyMatch(c -> c.getCollaborationSince() == null);

        if (!needsReseed) return;

        invoiceRepo.deleteAll();
        clientRepo.deleteAll();

        Client bmw = clientRepo.save(Client.builder()
                .name("BMW AG").code("BMW001").country("Germany").industry("Automotive")
                .status(Client.Status.ACTIVE).collaborationSince(LocalDate.of(2010, 3, 15))
                .collaborationState(Client.CollaborationState.ONGOING)
                .contactEmail("billing@bmw.de").contactPhone("+49-89-382-0")
                .creditLimit(bd("5000000")).paymentTermsDays(45)
                .riskProfile(Client.RiskProfile.LOW).averageDso(bd("38"))
                .totalOutstanding(bd("1250000")).totalPaid(bd("8750000"))
                .invoiceCount(45).overdueCount(2)
                .lastPaymentDate(LocalDate.now().minusDays(8)).build());

        Client vw = clientRepo.save(Client.builder()
                .name("Volkswagen AG").code("VW001").country("Germany").industry("Automotive")
                .status(Client.Status.ACTIVE).collaborationSince(LocalDate.of(2008, 6, 1))
                .collaborationState(Client.CollaborationState.ONGOING)
                .contactEmail("accounts@vw.de").contactPhone("+49-5361-9-0")
                .creditLimit(bd("8000000")).paymentTermsDays(60)
                .riskProfile(Client.RiskProfile.MEDIUM).averageDso(bd("55"))
                .totalOutstanding(bd("3200000")).totalPaid(bd("12800000"))
                .invoiceCount(72).overdueCount(8)
                .lastPaymentDate(LocalDate.now().minusDays(22)).build());

        Client mercedes = clientRepo.save(Client.builder()
                .name("Mercedes-Benz AG").code("MB001").country("Germany").industry("Automotive")
                .status(Client.Status.ACTIVE).collaborationSince(LocalDate.of(2012, 9, 20))
                .collaborationState(Client.CollaborationState.ONGOING)
                .contactEmail("finance@mercedes-benz.com").contactPhone("+49-711-17-0")
                .creditLimit(bd("6000000")).paymentTermsDays(45)
                .riskProfile(Client.RiskProfile.LOW).averageDso(bd("42"))
                .totalOutstanding(bd("980000")).totalPaid(bd("11200000"))
                .invoiceCount(58).overdueCount(1)
                .lastPaymentDate(LocalDate.now().minusDays(5)).build());

        Client ford = clientRepo.save(Client.builder()
                .name("Ford Motor Company").code("FORD01").country("USA").industry("Automotive")
                .status(Client.Status.ACTIVE).collaborationSince(LocalDate.of(2015, 2, 10))
                .collaborationState(Client.CollaborationState.ONGOING)
                .contactEmail("ap@ford.com").contactPhone("+1-313-322-3000")
                .creditLimit(bd("4500000")).paymentTermsDays(30)
                .riskProfile(Client.RiskProfile.HIGH).averageDso(bd("52"))
                .totalOutstanding(bd("2100000")).totalPaid(bd("9800000"))
                .invoiceCount(38).overdueCount(6)
                .lastPaymentDate(LocalDate.now().minusDays(35)).build());

        Client stellantis = clientRepo.save(Client.builder()
                .name("Stellantis NV").code("STE001").country("France").industry("Automotive")
                .status(Client.Status.ACTIVE).collaborationSince(LocalDate.of(2018, 11, 5))
                .collaborationState(Client.CollaborationState.ONGOING)
                .contactEmail("ap@stellantis.com").contactPhone("+33-1-40-66-55-11")
                .creditLimit(bd("3000000")).paymentTermsDays(60)
                .riskProfile(Client.RiskProfile.HIGH).averageDso(bd("72"))
                .totalOutstanding(bd("1800000")).totalPaid(bd("5400000"))
                .invoiceCount(31).overdueCount(9)
                .lastPaymentDate(LocalDate.now().minusDays(45)).build());

        invoiceRepo.saveAll(buildInvoices(bmw, vw, mercedes, ford, stellantis));
    }

    private List<Invoice> buildInvoices(Client bmw, Client vw, Client mercedes,
                                         Client ford, Client stellantis) {
        LocalDate now = LocalDate.now();
        return List.of(
            inv("INV-2024-001", bmw,       "125000", now.minusDays(60), now.minusDays(15),
                Invoice.InvoiceStatus.PAID,    null, "15", Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-002", bmw,       "89500",  now.minusDays(30), now.plusDays(15),
                Invoice.InvoiceStatus.PENDING, null, "18", Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-003", bmw,       "312000", now.minusDays(10), now.plusDays(35),
                Invoice.InvoiceStatus.PENDING, null, "10", Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-004", vw,        "215000", now.minusDays(90), now.minusDays(30),
                Invoice.InvoiceStatus.OVERDUE, 30,   "78", Invoice.RiskLevel.HIGH,   60),
            inv("INV-2024-005", vw,        "445000", now.minusDays(120),now.minusDays(60),
                Invoice.InvoiceStatus.PAID,    null, "45", Invoice.RiskLevel.MEDIUM, 60),
            inv("INV-2024-006", vw,        "178000", now.minusDays(20), now.plusDays(40),
                Invoice.InvoiceStatus.PENDING, null, "52", Invoice.RiskLevel.MEDIUM, 60),
            inv("INV-2024-007", mercedes,  "340000", now.minusDays(75), now.minusDays(30),
                Invoice.InvoiceStatus.PAID,    null, "12", Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-008", mercedes,  "156000", now.minusDays(20), now.plusDays(25),
                Invoice.InvoiceStatus.PENDING, null, "20", Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-009", mercedes,  "520000", now.minusDays(10), now.plusDays(35),
                Invoice.InvoiceStatus.PENDING, null, "8",  Invoice.RiskLevel.LOW,    45),
            inv("INV-2024-010", ford,      "380000", now.minusDays(85), now.minusDays(25),
                Invoice.InvoiceStatus.OVERDUE, 25,   "82", Invoice.RiskLevel.HIGH,   30),
            inv("INV-2024-011", ford,      "290000", now.minusDays(50), now.minusDays(20),
                Invoice.InvoiceStatus.OVERDUE, 20,   "75", Invoice.RiskLevel.HIGH,   30),
            inv("INV-2024-012", ford,      "167000", now.minusDays(15), now.plusDays(15),
                Invoice.InvoiceStatus.PENDING, null, "60", Invoice.RiskLevel.MEDIUM, 30),
            inv("INV-2024-013", stellantis,"420000", now.minusDays(110),now.minusDays(50),
                Invoice.InvoiceStatus.OVERDUE, 50,   "90", Invoice.RiskLevel.HIGH,   60),
            inv("INV-2024-014", stellantis,"285000", now.minusDays(80), now.minusDays(20),
                Invoice.InvoiceStatus.OVERDUE, 20,   "85", Invoice.RiskLevel.HIGH,   60),
            inv("INV-2024-015", stellantis,"190000", now.minusDays(40), now.plusDays(20),
                Invoice.InvoiceStatus.PENDING, null, "68", Invoice.RiskLevel.HIGH,   60)
        );
    }

    private Invoice inv(String number, Client client, String amount,
                        LocalDate issueDate, LocalDate dueDate,
                        Invoice.InvoiceStatus status, Integer daysOverdue,
                        String riskScore, Invoice.RiskLevel riskLevel, int terms) {
        return Invoice.builder()
                .invoiceNumber(number).client(client)
                .amount(bd(amount)).currency("EUR")
                .issueDate(issueDate).dueDate(dueDate)
                .status(status).daysOverdue(daysOverdue)
                .riskScore(bd(riskScore)).riskLevel(riskLevel)
                .paymentTerms(terms)
                .build();
    }

    private BigDecimal bd(String val) { return new BigDecimal(val); }
}
