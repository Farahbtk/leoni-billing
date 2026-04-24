import {
  MatSelectModule
} from "./chunk-EOL2IQLF.js";
import {
  MatChipListbox,
  MatChipOption,
  MatChipsModule
} from "./chunk-OOLH75IF.js";
import "./chunk-QKNRMUAZ.js";
import {
  InvoiceService
} from "./chunk-64ZEAEMR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-YSSCNL4Y.js";
import "./chunk-PYIK4VV4.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RJCEXEV4.js";
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
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-II2NPOOE.js";

// src/app/features/alerts/alerts.component.ts
var _c0 = (a0) => ["/invoices", a0];
function AlertsComponent_div_40_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", alert_r1.daysOverdue, " days overdue ");
  }
}
function AlertsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20)(7, "div")(8, "span", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 24)(15, "span", 25)(16, "mat-icon");
    \u0275\u0275text(17, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 25)(21, "mat-icon");
    \u0275\u0275text(22, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AlertsComponent_div_40_span_25_Template, 4, 1, "span", 26);
    \u0275\u0275elementStart(26, "span", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 28)(29, "button", 29);
    \u0275\u0275text(30, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275text(32, "Send Reminder");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    const alert_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getRiskClass((tmp_2_0 = alert_r1.riskScore) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRiskClass((tmp_3_0 = alert_r1.riskScore) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_4_0 = alert_r1.riskScore) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) >= 70 ? "warning" : "info");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(alert_r1.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2014 ", alert_r1.clientName, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getRiskClass((tmp_7_0 = alert_r1.riskScore) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r1.riskScore, "% risk ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(19, 17, alert_r1.amount, "EUR", "symbol", "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Due: ", \u0275\u0275pipeBind2(24, 22, alert_r1.dueDate, "MMM d, yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", alert_r1.daysOverdue);
    \u0275\u0275advance();
    \u0275\u0275classMap(alert_r1.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(alert_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, alert_r1.id));
  }
}
function AlertsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No invoices match the current filter.");
    \u0275\u0275elementEnd()();
  }
}
var AlertsComponent = class _AlertsComponent {
  constructor(invoiceService) {
    this.invoiceService = invoiceService;
    this.allAlerts = [];
    this.filtered = [];
    this.filterLevel = "ALL";
  }
  ngOnInit() {
    this.invoiceService.getOverdue().subscribe({
      next: (data) => {
        this.allAlerts = data;
        this.applyFilter();
      },
      error: () => {
        this.allAlerts = MOCK_ALERTS;
        this.applyFilter();
      }
    });
  }
  applyFilter() {
    this.filtered = this.filterLevel === "ALL" ? this.allAlerts : this.allAlerts.filter((a) => a.riskLevel === this.filterLevel);
  }
  getRiskClass(score) {
    if (score >= 70)
      return "high";
    if (score >= 40)
      return "medium";
    return "low";
  }
  get highCount() {
    return this.allAlerts.filter((a) => a.riskLevel === "HIGH").length;
  }
  get mediumCount() {
    return this.allAlerts.filter((a) => a.riskLevel === "MEDIUM").length;
  }
  static {
    this.\u0275fac = function AlertsComponent_Factory(t) {
      return new (t || _AlertsComponent)(\u0275\u0275directiveInject(InvoiceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertsComponent, selectors: [["app-alerts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [[1, "page-header"], [1, "page-title"], [1, "summary-chips"], [1, "summary-chip", "danger"], [1, "chip-count"], [1, "chip-label"], [1, "summary-chip", "warning"], [1, "summary-chip", "info"], [2, "margin-bottom", "16px", "display", "flex", "gap", "10px", "align-items", "center"], [3, "ngModelChange", "change", "ngModel"], ["value", "ALL", "selected", ""], ["value", "HIGH"], ["value", "MEDIUM"], [1, "alert-list"], ["class", "alert-card", 3, "class", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "alert-card"], [1, "alert-left"], [1, "alert-icon"], [1, "alert-content"], [1, "alert-header-row"], [1, "alert-invoice", "fw-600"], [1, "alert-client", "text-muted"], [1, "risk-badge"], [1, "alert-details"], [1, "detail-item"], ["class", "detail-item text-danger", 4, "ngIf"], [1, "status-chip"], [1, "alert-actions"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-stroked-button", "", "color", "warn"], [1, "detail-item", "text-danger"], [1, "empty-state"]], template: function AlertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Risk Alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "High-risk and overdue invoices requiring attention");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "mat-icon");
        \u0275\u0275text(9, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div")(11, "div", 4);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5);
        \u0275\u0275text(14, "High Risk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6)(16, "mat-icon");
        \u0275\u0275text(17, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div")(19, "div", 4);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22, "Medium Risk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 7)(24, "mat-icon");
        \u0275\u0275text(25, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div")(27, "div", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 5);
        \u0275\u0275text(30, "Total Alerts");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 8)(32, "mat-chip-listbox", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AlertsComponent_Template_mat_chip_listbox_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterLevel, $event) || (ctx.filterLevel = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AlertsComponent_Template_mat_chip_listbox_change_32_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(33, "mat-chip-option", 10);
        \u0275\u0275text(34, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-chip-option", 11);
        \u0275\u0275text(36, "High Risk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-chip-option", 12);
        \u0275\u0275text(38, "Medium Risk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 13);
        \u0275\u0275template(40, AlertsComponent_div_40_Template, 33, 27, "div", 14)(41, AlertsComponent_div_41_Template, 7, 0, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.highCount);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.mediumCount);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.allAlerts.length);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterLevel);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.filtered);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filtered.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconModule, MatIcon, MatSelectModule, MatChipsModule, MatChipListbox, MatChipOption], styles: ["\n\n.summary-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: var(--radius);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-card);\n  min-width: 140px;\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.danger[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--danger);\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.warning[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--warning);\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.info[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--info);\n}\n.summary-chips[_ngcontent-%COMP%]   .summary-chip.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--info);\n}\n.alert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.alert-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  border-left: 4px solid transparent;\n  box-shadow: var(--shadow-card);\n  transition: box-shadow 0.15s;\n}\n.alert-card.high[_ngcontent-%COMP%] {\n  border-left-color: var(--danger);\n}\n.alert-card.medium[_ngcontent-%COMP%] {\n  border-left-color: var(--warning);\n}\n.alert-card.low[_ngcontent-%COMP%] {\n  border-left-color: var(--success);\n}\n.alert-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.alert-icon.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n.alert-icon.high[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.alert-icon.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.alert-icon.medium[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.alert-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.alert-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.alert-content[_ngcontent-%COMP%]   .alert-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.alert-content[_ngcontent-%COMP%]   .alert-header-row[_ngcontent-%COMP%]   .alert-invoice[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.alert-content[_ngcontent-%COMP%]   .alert-header-row[_ngcontent-%COMP%]   .alert-client[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.alert-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px;\n  color: var(--text-secondary);\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--success);\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=alerts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertsComponent, { className: "AlertsComponent", filePath: "src\\app\\features\\alerts\\alerts.component.ts", lineNumber: 20 });
})();
var MOCK_ALERTS = [
  { id: 2, invoiceNumber: "INV-2024-002", clientId: 2, clientName: "Volkswagen AG", amount: 42e4, currency: "EUR", issueDate: "2024-01-15", dueDate: "2024-02-14", status: "OVERDUE", riskScore: 78, riskLevel: "HIGH", paymentTerms: 30, daysOverdue: 18 },
  { id: 5, invoiceNumber: "INV-2024-005", clientId: 2, clientName: "Volkswagen AG", amount: 54e4, currency: "EUR", issueDate: "2024-01-25", dueDate: "2024-02-24", status: "OVERDUE", riskScore: 85, riskLevel: "HIGH", paymentTerms: 30, daysOverdue: 8 },
  { id: 8, invoiceNumber: "INV-2024-008", clientId: 7, clientName: "Ford Motor Company", amount: 291e3, currency: "EUR", issueDate: "2024-02-01", dueDate: "2024-03-02", status: "OVERDUE", riskScore: 72, riskLevel: "HIGH", paymentTerms: 30, daysOverdue: 5 },
  { id: 3, invoiceNumber: "INV-2024-003", clientId: 3, clientName: "Mercedes-Benz", amount: 195e3, currency: "EUR", issueDate: "2024-01-20", dueDate: "2024-02-19", status: "PENDING", riskScore: 55, riskLevel: "MEDIUM", paymentTerms: 30 },
  { id: 11, invoiceNumber: "INV-2024-011", clientId: 4, clientName: "Stellantis", amount: 267e3, currency: "EUR", issueDate: "2024-02-10", dueDate: "2024-03-11", status: "PENDING", riskScore: 48, riskLevel: "MEDIUM", paymentTerms: 30 }
];
export {
  AlertsComponent
};
//# sourceMappingURL=chunk-GOVSVIUB.js.map
