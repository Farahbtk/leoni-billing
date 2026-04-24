import {
  MatCardModule
} from "./chunk-3QZYGWWF.js";
import {
  BaseChartDirective,
  NgChartsModule
} from "./chunk-DBQSQVRN.js";
import {
  ClientService
} from "./chunk-7ZLLAYBM.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2OFQEZPN.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-OOLH75IF.js";
import {
  InvoiceService
} from "./chunk-64ZEAEMR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-YSSCNL4Y.js";
import "./chunk-RJCEXEV4.js";
import "./chunk-32VODOFB.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-SWEXKP5I.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-II2NPOOE.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "mat-icon");
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31);
    \u0275\u0275text(7, "Total Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33)(11, "span", 34);
    \u0275\u0275text(12, "+12%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " vs last month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 28)(15, "div", 35)(16, "mat-icon");
    \u0275\u0275text(17, "euro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 30)(19, "div", 31);
    \u0275\u0275text(20, "Total Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 32);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 33)(25, "span", 34);
    \u0275\u0275text(26, "+8.4%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " vs last month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 28)(29, "div", 36)(30, "mat-icon");
    \u0275\u0275text(31, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 30)(33, "div", 31);
    \u0275\u0275text(34, "Overdue Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 32);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 37);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 28)(41, "div", 38)(42, "mat-icon");
    \u0275\u0275text(43, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 30)(45, "div", 31);
    \u0275\u0275text(46, "Average DSO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 32);
    \u0275\u0275text(48);
    \u0275\u0275elementStart(49, "small");
    \u0275\u0275text(50, "days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 33)(52, "span", 39);
    \u0275\u0275text(53, "+3 days");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " vs target 39d");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 28)(56, "div", 40)(57, "mat-icon");
    \u0275\u0275text(58, "trending_up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 30)(60, "div", 31);
    \u0275\u0275text(61, "Collection Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 32);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 33)(66, "span", 34);
    \u0275\u0275text(67, "+1.2%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " vs last month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 28)(70, "div", 41)(71, "mat-icon");
    \u0275\u0275text(72, "psychology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 30)(74, "div", 31);
    \u0275\u0275text(75, "High Risk Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 32);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 37);
    \u0275\u0275text(79, "Requires attention");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.kpis.totalInvoices);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 7, ctx_r0.kpis.totalRevenue, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.kpis.overdueInvoices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(39, 12, ctx_r0.kpis.overdueAmount, "EUR", "symbol", "1.0-0"), " outstanding");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r0.kpis.averageDso, " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(64, 17, ctx_r0.kpis.collectionRate, "1.1-1"), "%");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.kpis.highRiskCount);
  }
}
function DashboardComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 42);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 44)(16, "span", 45);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const inv_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r2.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r2.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(7, 10, inv_r2.amount, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 15, inv_r2.dueDate, "MMM d, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(inv_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", inv_r2.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getRiskClass((tmp_8_0 = inv_r2.riskScore) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", inv_r2.riskScore, "% ");
  }
}
function DashboardComponent_div_69_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", inv_r3.daysOverdue, " days overdue");
  }
}
function DashboardComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275template(10, DashboardComponent_div_69_span_10_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 51);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inv_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", inv_r3.invoiceNumber, " \u2014 ", inv_r3.clientName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(9, 5, inv_r3.amount, "EUR", "symbol", "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r3.daysOverdue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", inv_r3.riskScore, "%");
  }
}
function DashboardComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No high-risk alerts");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275element(2, "mat-progress-bar", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(clientService, invoiceService) {
    this.clientService = clientService;
    this.invoiceService = invoiceService;
    this.today = /* @__PURE__ */ new Date();
    this.kpis = {
      totalInvoices: 0,
      totalRevenue: 0,
      overdueInvoices: 0,
      overdueAmount: 0,
      averageDso: 0,
      collectionRate: 0,
      pendingAmount: 0,
      highRiskCount: 0
    };
    this.recentInvoices = [];
    this.highRiskInvoices = [];
    this.loading = true;
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", labels: { font: { family: "Inter", size: 12 }, usePointStyle: true, boxWidth: 8 } },
        tooltip: { mode: "index", intersect: false }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: "Inter", size: 11 } } },
        y: {
          grid: { color: "rgba(0,0,0,0.04)" },
          ticks: { font: { family: "Inter", size: 11 }, callback: (v) => "\u20AC" + (Number(v) / 1e3).toFixed(0) + "k" }
        }
      }
    };
    this.barChartData = {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      datasets: [
        { label: "Invoiced", data: [82e4, 95e4, 71e4, 88e4, 105e4, 92e4], backgroundColor: "#3d52a0", borderRadius: 6, barPercentage: 0.55 },
        { label: "Collected", data: [74e4, 86e4, 68e4, 8e5, 94e4, 85e4], backgroundColor: "#10b981", borderRadius: 6, barPercentage: 0.55 }
      ]
    };
    this.doughnutChartData = {
      labels: ["Paid", "Overdue", "Pending"],
      datasets: [{
        data: [205, 23, 20],
        backgroundColor: ["#10b981", "#ef4444", "#f59e0b"],
        borderWidth: 0,
        hoverOffset: 8
      }]
    };
    this.doughnutOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: { position: "right", labels: { font: { family: "Inter", size: 12 }, usePointStyle: true, padding: 16 } }
      }
    };
  }
  ngOnInit() {
    this.loadKpis();
    this.loadRecentInvoices();
    this.loadHighRiskInvoices();
  }
  loadKpis() {
    this.clientService.getDashboardKpis().subscribe({
      next: (data) => {
        this.kpis = data;
        this.loading = false;
      },
      error: () => {
        this.kpis = {
          totalInvoices: 248,
          totalRevenue: 475e4,
          overdueInvoices: 23,
          overdueAmount: 42e4,
          averageDso: 42,
          collectionRate: 87.3,
          pendingAmount: 12e5,
          highRiskCount: 9
        };
        this.loading = false;
      }
    });
  }
  loadRecentInvoices() {
    this.invoiceService.getAll({ page: 0, size: 5 }).subscribe({
      next: (res) => this.recentInvoices = res.content,
      error: () => {
        this.recentInvoices = MOCK_INVOICES;
      }
    });
  }
  loadHighRiskInvoices() {
    this.invoiceService.getHighRisk().subscribe({
      next: (data) => this.highRiskInvoices = data.slice(0, 4),
      error: () => {
        this.highRiskInvoices = MOCK_INVOICES.filter((i) => i.riskLevel === "HIGH");
      }
    });
  }
  getRiskClass(score) {
    if (score >= 70)
      return "high";
    if (score >= 40)
      return "medium";
    return "low";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(InvoiceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 13, consts: [[1, "page-header"], [1, "page-title"], [1, "header-actions"], [1, "last-updated"], ["mat-raised-button", "", "color", "primary", "routerLink", "/invoices"], ["class", "kpi-grid", 4, "ngIf"], [1, "charts-row"], [1, "chart-card", "chart-bar"], [1, "chart-header"], [1, "text-muted", 2, "font-size", "0.8rem", "margin", "0"], ["selected", "", 2, "background", "#3d52a0", "color", "#fff"], [1, "chart-body"], ["baseChart", "", "type", "bar", 3, "data", "options"], [1, "chart-card", "chart-donut"], [1, "chart-body", "donut-body"], ["baseChart", "", "type", "doughnut", 3, "data", "options"], [1, "bottom-row"], [1, "table-container", "recent-table"], [1, "table-header"], ["mat-button", "", "color", "primary", "routerLink", "/invoices"], [4, "ngFor", "ngForOf"], [1, "alerts-panel"], [2, "color", "var(--danger)", "font-size", "18px", "vertical-align", "middle"], ["mat-button", "", "color", "primary", "routerLink", "/alerts"], ["class", "alert-item", 4, "ngFor", "ngForOf"], ["class", "empty-alerts", 4, "ngIf"], [4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#3d52a0,#6c63ff)"], [1, "kpi-content"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-trend"], [1, "trend-up"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#10b981,#059669)"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#ef4444,#dc2626)"], [1, "kpi-trend", "text-danger"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#f59e0b,#d97706)"], [1, "trend-down"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#3b82f6,#2563eb)"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#8b5cf6,#7c3aed)"], [1, "fw-600"], [1, "status-chip"], [1, "risk-cell"], [1, "risk-badge"], [1, "alert-item"], [1, "alert-icon", "high"], [1, "alert-body"], [1, "alert-title"], [1, "alert-detail"], [1, "risk-badge", "high"], [1, "empty-alerts"], [1, "loading-overlay"], ["mode", "indeterminate"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Overview of Customer Billing \u2014 LEONI SSC Tunisia");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "span", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4)(11, "mat-icon");
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " New Invoice ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, DashboardComponent_div_14_Template, 80, 20, "div", 5);
        \u0275\u0275elementStart(15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "div")(19, "h3");
        \u0275\u0275text(20, "Invoiced vs Collected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 9);
        \u0275\u0275text(22, "Monthly comparison (EUR)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "mat-chip-set")(24, "mat-chip", 10);
        \u0275\u0275text(25, "Monthly");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275element(27, "canvas", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13)(29, "div", 8)(30, "div")(31, "h3");
        \u0275\u0275text(32, "Invoice Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 9);
        \u0275\u0275text(34, "Current period");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 14);
        \u0275\u0275element(36, "canvas", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 16)(38, "div", 17)(39, "div", 18)(40, "h3");
        \u0275\u0275text(41, "Recent Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 19);
        \u0275\u0275text(43, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "table")(45, "thead")(46, "tr")(47, "th");
        \u0275\u0275text(48, "Invoice #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Risk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "tbody");
        \u0275\u0275template(60, DashboardComponent_tr_60_Template, 18, 18, "tr", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 21)(62, "div", 18)(63, "h3")(64, "mat-icon", 22);
        \u0275\u0275text(65, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " Risk Alerts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 23);
        \u0275\u0275text(68, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(69, DashboardComponent_div_69_Template, 13, 10, "div", 24)(70, DashboardComponent_div_70_Template, 5, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(71, DashboardComponent_ng_container_71_Template, 3, 0, "ng-container", 26);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Last updated: ", \u0275\u0275pipeBind2(9, 10, ctx.today, "MMM d, yyyy HH:mm"), "");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(13);
        \u0275\u0275property("data", ctx.barChartData)("options", ctx.barChartOptions);
        \u0275\u0275advance(9);
        \u0275\u0275property("data", ctx.doughnutChartData)("options", ctx.doughnutOptions);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngForOf", ctx.recentInvoices);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.highRiskInvoices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.highRiskInvoices.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, CurrencyPipe, DatePipe, RouterModule, RouterLink, MatCardModule, MatIconModule, MatIcon, MatButtonModule, MatButton, MatChipsModule, MatChip, MatChipSet, MatProgressBarModule, MatProgressBar, NgChartsModule, BaseChartDirective], styles: ['@charset "UTF-8";\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1200px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 0 2px;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-body[_ngcontent-%COMP%] {\n  height: 260px;\n  position: relative;\n}\n.chart-card[_ngcontent-%COMP%]   .donut-body[_ngcontent-%COMP%] {\n  height: 220px;\n}\n.bottom-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .bottom-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f8faff;\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  text-align: left;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid var(--border);\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.recent-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8faff;\n}\n.recent-table[_ngcontent-%COMP%]   .risk-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.alerts-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-card);\n  overflow: hidden;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  transition: background 0.15s;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-icon.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-icon.high[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 18px;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-body[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.alerts-panel[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-body[_ngcontent-%COMP%]   .alert-detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.alerts-panel[_ngcontent-%COMP%]   .empty-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 32px 16px;\n  color: var(--text-secondary);\n}\n.alerts-panel[_ngcontent-%COMP%]   .empty-alerts[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: var(--success);\n  margin-bottom: 8px;\n}\n.alerts-panel[_ngcontent-%COMP%]   .empty-alerts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 27 });
})();
var MOCK_INVOICES = [
  { id: 1, invoiceNumber: "INV-2024-001", clientId: 1, clientName: "BMW Group", amount: 285e3, currency: "EUR", issueDate: "2024-01-10", dueDate: "2024-02-09", status: "PAID", riskScore: 12, riskLevel: "LOW", paymentTerms: 30 },
  { id: 2, invoiceNumber: "INV-2024-002", clientId: 2, clientName: "Volkswagen AG", amount: 42e4, currency: "EUR", issueDate: "2024-01-15", dueDate: "2024-02-14", status: "OVERDUE", riskScore: 78, riskLevel: "HIGH", paymentTerms: 30, daysOverdue: 18 },
  { id: 3, invoiceNumber: "INV-2024-003", clientId: 3, clientName: "Mercedes-Benz", amount: 195e3, currency: "EUR", issueDate: "2024-01-20", dueDate: "2024-02-19", status: "PENDING", riskScore: 45, riskLevel: "MEDIUM", paymentTerms: 30 },
  { id: 4, invoiceNumber: "INV-2024-004", clientId: 4, clientName: "Stellantis", amount: 312e3, currency: "EUR", issueDate: "2024-01-22", dueDate: "2024-02-21", status: "PAID", riskScore: 22, riskLevel: "LOW", paymentTerms: 30 },
  { id: 5, invoiceNumber: "INV-2024-005", clientId: 2, clientName: "Volkswagen AG", amount: 54e4, currency: "EUR", issueDate: "2024-01-25", dueDate: "2024-02-24", status: "OVERDUE", riskScore: 85, riskLevel: "HIGH", paymentTerms: 30, daysOverdue: 8 }
];
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-TVNIVBTW.js.map
