import {
  MatCardModule
} from "./chunk-3QZYGWWF.js";
import {
  BaseChartDirective,
  NgChartsModule
} from "./chunk-DBQSQVRN.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-NYZQAR5X.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-SR36QCJI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2OFQEZPN.js";
import {
  MatChipsModule
} from "./chunk-OOLH75IF.js";
import "./chunk-QKNRMUAZ.js";
import {
  InvoiceService
} from "./chunk-64ZEAEMR.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-YSSCNL4Y.js";
import "./chunk-PYIK4VV4.js";
import "./chunk-RJCEXEV4.js";
import "./chunk-32VODOFB.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-SWEXKP5I.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgIf,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-II2NPOOE.js";

// src/app/features/invoices/invoice-detail/invoice-detail.component.ts
function InvoiceDetailComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Days Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.daysOverdue, " days");
  }
}
function InvoiceDetailComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.invoice.description);
  }
}
function InvoiceDetailComponent_div_0_div_77_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, " This invoice has a high probability of late payment. Immediate follow-up is recommended. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, " Moderate risk detected. Monitor closely and consider early reminder. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, " Low risk of payment delay. No action required. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5, "Payment Delay Risk");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-progress-bar", 30);
    \u0275\u0275elementStart(7, "div", 31)(8, "span");
    \u0275\u0275text(9, "Low (0%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "High (100%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 32)(13, "mat-icon");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, InvoiceDetailComponent_div_0_div_77_p_17_Template, 2, 0, "p", 33)(18, InvoiceDetailComponent_div_0_div_77_p_18_Template, 2, 0, "p", 34)(19, InvoiceDetailComponent_div_0_div_77_p_19_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRiskClass(ctx_r1.invoice.riskScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.invoice.riskScore, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mode", "determinate")("value", ctx_r1.invoice.riskScore)("color", ctx_r1.invoice.riskScore >= 70 ? "warn" : "primary");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.getRiskClass(ctx_r1.invoice.riskScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invoice.riskScore >= 70 ? "warning" : ctx_r1.invoice.riskScore >= 40 ? "info" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.riskLevel, " RISK");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore >= 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore >= 40 && ctx_r1.invoice.riskScore < 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore < 40);
  }
}
function InvoiceDetailComponent_div_0_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'No prediction yet. Click "Run Prediction" to assess risk.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_ng_template_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runPrediction());
    });
    \u0275\u0275text(6, "Run Prediction");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_div_0_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Risk Factor Explanation (SHAP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "XGBoost feature contributions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "mat-divider");
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275element(8, "canvas", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45)(10, "div", 46);
    \u0275\u0275element(11, "span", 47);
    \u0275\u0275text(12, " Increases risk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275element(14, "span", 48);
    \u0275\u0275text(15, " Decreases risk");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("data", ctx_r1.shapChartData)("options", ctx_r1.shapChartOptions);
  }
}
function InvoiceDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 3)(2, "div", 4)(3, "button", 5)(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 7)(13, "mat-icon");
    \u0275\u0275text(14, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Export PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 8);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runPrediction());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "h3");
    \u0275\u0275text(24, "Invoice Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 12);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "mat-divider");
    \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14)(35, "span", 15);
    \u0275\u0275text(36, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 16);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "span", 15);
    \u0275\u0275text(41, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 17);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14)(46, "span", 15);
    \u0275\u0275text(47, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 18);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 14)(51, "span", 15);
    \u0275\u0275text(52, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 18);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "span", 15);
    \u0275\u0275text(58, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 18);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 14)(63, "span", 15);
    \u0275\u0275text(64, "Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 18);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, InvoiceDetailComponent_div_0_div_67_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "mat-divider", 20);
    \u0275\u0275template(69, InvoiceDetailComponent_div_0_div_69_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 21)(71, "div", 11)(72, "h3");
    \u0275\u0275text(73, "AI Risk Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-icon", 22);
    \u0275\u0275text(75, "psychology");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(76, "mat-divider");
    \u0275\u0275template(77, InvoiceDetailComponent_div_0_div_77_Template, 20, 13, "div", 23)(78, InvoiceDetailComponent_div_0_ng_template_78_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, InvoiceDetailComponent_div_0_div_80_Template, 16, 2, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noRisk_r4 = \u0275\u0275reference(79);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.invoice.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.clientName, " \u2014 Invoice Detail");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.predicting);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.predicting ? "Running..." : "Run Prediction", " ");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.invoice.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.invoice.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.invoice.invoiceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.invoice.clientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(44, 21, ctx_r1.invoice.amount, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.invoice.currency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 26, ctx_r1.invoice.issueDate, "MMMM d, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-danger", ctx_r1.invoice.status === "OVERDUE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 29, ctx_r1.invoice.dueDate, "MMMM d, yyyy"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.paymentTerms, " days");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.daysOverdue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.invoice.description);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore !== void 0)("ngIfElse", noRisk_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.invoice.shapExplanation || ctx_r1.invoice.riskScore !== void 0);
  }
}
function InvoiceDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "mat-progress-bar", 50);
    \u0275\u0275elementEnd();
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
  constructor(route, invoiceService, snack) {
    this.route = route;
    this.invoiceService = invoiceService;
    this.snack = snack;
    this.loading = true;
    this.predicting = false;
    this.shapChartData = { labels: [], datasets: [] };
    this.shapChartOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => ` Impact: ${c.raw > 0 ? "+" : ""}${c.raw}` } } },
      scales: {
        x: { grid: { color: "rgba(0,0,0,0.04)" }, ticks: { font: { family: "Inter", size: 11 } } },
        y: { grid: { display: false }, ticks: { font: { family: "Inter", size: 11 } } }
      }
    };
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.invoiceService.getById(id).subscribe({
      next: (inv) => {
        this.invoice = inv;
        this.buildShapChart();
        this.loading = false;
      },
      error: () => {
        this.invoice = MOCK_INVOICE_DETAIL;
        this.buildShapChart();
        this.loading = false;
      }
    });
  }
  runPrediction() {
    this.predicting = true;
    this.invoiceService.runPrediction([this.invoice.id]).subscribe({
      next: (updated) => {
        this.invoice = __spreadValues(__spreadValues({}, this.invoice), updated[0]);
        this.buildShapChart();
        this.predicting = false;
        this.snack.open("Prediction updated successfully", "OK", { duration: 3e3 });
      },
      error: () => {
        this.predicting = false;
        this.snack.open("Prediction service unavailable", "Close", { duration: 4e3 });
      }
    });
  }
  buildShapChart() {
    const factors = this.invoice.shapExplanation ?? MOCK_SHAP;
    const sorted = [...factors].sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact)).slice(0, 8);
    this.shapChartData = {
      labels: sorted.map((f) => f.feature),
      datasets: [{
        data: sorted.map((f) => f.impact),
        backgroundColor: sorted.map((f) => f.impact > 0 ? "rgba(239,68,68,0.75)" : "rgba(16,185,129,0.75)"),
        borderRadius: 4
      }]
    };
  }
  getRiskClass(score) {
    if (score >= 70)
      return "high";
    if (score >= 40)
      return "medium";
    return "low";
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(t) {
      return new (t || _InvoiceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["noRisk", ""], [4, "ngIf"], ["style", "display:flex;justify-content:center;padding:80px", 4, "ngIf"], [1, "page-header"], [1, "page-title", 2, "display", "flex", "align-items", "center", "gap", "12px"], ["mat-icon-button", "", "routerLink", "/invoices"], [2, "display", "flex", "gap", "10px"], ["mat-stroked-button", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "detail-grid"], [1, "info-card"], [1, "card-header"], [1, "status-chip"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value", "fw-600"], [1, "info-value", "fw-600", "amount"], [1, "info-value"], ["class", "info-item", 4, "ngIf"], [2, "margin", "16px 0"], [1, "risk-card"], [2, "color", "var(--primary)"], ["class", "risk-content", 4, "ngIf", "ngIfElse"], ["class", "shap-card", 4, "ngIf"], [1, "info-value", "text-danger", "fw-600"], [1, "risk-content"], [1, "risk-gauge"], [1, "gauge-value"], [1, "gauge-label"], [2, "height", "8px", "border-radius", "4px", "margin-top", "12px", 3, "mode", "value", "color"], [1, "gauge-scale"], [1, "risk-level-badge"], ["class", "risk-message", 4, "ngIf"], ["class", "risk-message medium", 4, "ngIf"], ["class", "risk-message low", 4, "ngIf"], [1, "risk-message"], [1, "risk-message", "medium"], [1, "risk-message", "low"], [1, "no-prediction"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "shap-card"], [1, "text-muted", 2, "font-size", "0.78rem"], [1, "shap-chart"], ["baseChart", "", "type", "bar", 3, "data", "options"], [1, "shap-legend"], [1, "legend-item"], [1, "dot", "red"], [1, "dot", "green"], [2, "display", "flex", "justify-content", "center", "padding", "80px"], ["mode", "indeterminate", 2, "width", "200px"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InvoiceDetailComponent_div_0_Template, 81, 32, "div", 1)(1, InvoiceDetailComponent_div_1_Template, 2, 0, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.loading && ctx.invoice);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      CurrencyPipe,
      DatePipe,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDividerModule,
      MatDivider,
      MatProgressBarModule,
      MatProgressBar,
      MatChipsModule,
      MatSnackBarModule,
      NgChartsModule,
      BaseChartDirective
    ], styles: ['@charset "UTF-8";\n\n\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  grid-template-rows: auto auto;\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-card);\n  padding: 20px 24px;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 16px;\n}\n@media (max-width: 600px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.info-item[_ngcontent-%COMP%]   .info-value.amount[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--primary);\n}\n.risk-content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.high[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.medium[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.low[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-scale[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 12px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.high[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.medium[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.low[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.low[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #991b1b;\n  background: #fee2e2;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message.medium[_ngcontent-%COMP%] {\n  color: #92400e;\n  background: #fef3c7;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message.low[_ngcontent-%COMP%] {\n  color: #065f46;\n  background: #d1fae5;\n}\n.no-prediction[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 16px;\n  text-align: center;\n  color: var(--text-secondary);\n}\n.no-prediction[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.no-prediction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.shap-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.shap-chart[_ngcontent-%COMP%] {\n  height: 260px;\n  margin-top: 16px;\n}\n.shap-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 12px;\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.shap-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.shap-legend[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n.shap-legend[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.75);\n}\n.shap-legend[_ngcontent-%COMP%]   .dot.green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.75);\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "src\\app\\features\\invoices\\invoice-detail\\invoice-detail.component.ts", lineNumber: 28 });
})();
var MOCK_SHAP = [
  { feature: "Days since last late payment", value: 45, impact: 0.28 },
  { feature: "Invoice amount (EUR)", value: 42e4, impact: 0.22 },
  { feature: "Client payment history score", value: 62, impact: -0.18 },
  { feature: "Days to due date", value: 8, impact: 0.15 },
  { feature: "Overdue count last 12 months", value: 3, impact: 0.12 },
  { feature: "Client credit utilization", value: 0.71, impact: 0.09 },
  { feature: "Payment terms (days)", value: 30, impact: -0.06 },
  { feature: "Seasonality factor", value: 0.8, impact: 0.04 }
];
var MOCK_INVOICE_DETAIL = {
  id: 2,
  invoiceNumber: "INV-2024-002",
  clientId: 2,
  clientName: "Volkswagen AG",
  amount: 42e4,
  currency: "EUR",
  issueDate: "2024-01-15",
  dueDate: "2024-02-14",
  status: "OVERDUE",
  riskScore: 78,
  riskLevel: "HIGH",
  paymentTerms: 30,
  daysOverdue: 18,
  description: "Wire harness systems \u2014 Q1 2024 delivery batch",
  shapExplanation: MOCK_SHAP
};
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=chunk-QR6KOJWN.js.map
