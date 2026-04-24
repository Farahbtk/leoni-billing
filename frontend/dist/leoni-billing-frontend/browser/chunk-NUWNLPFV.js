import {
  BaseChartDirective,
  NgChartsModule
} from "./chunk-DBQSQVRN.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-XY766PYJ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EOL2IQLF.js";
import "./chunk-QKNRMUAZ.js";
import "./chunk-PYIK4VV4.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RJCEXEV4.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  MatOption
} from "./chunk-SWEXKP5I.js";
import {
  CommonModule,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-II2NPOOE.js";

// src/app/features/reports/reports.component.ts
function ReportsComponent_mat_header_cell_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell");
    \u0275\u0275text(1, "Metric");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_mat_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.metric);
  }
}
function ReportsComponent_mat_header_cell_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell");
    \u0275\u0275text(1, "Actual");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_mat_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.value);
  }
}
function ReportsComponent_mat_header_cell_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell");
    \u0275\u0275text(1, "Target");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_mat_cell_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.target);
  }
}
function ReportsComponent_mat_header_cell_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell");
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_mat_cell_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "span", 29)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.status === "on-track" ? "check_circle" : row_r4.status === "at-risk" ? "info" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, row_r4.status), " ");
  }
}
function ReportsComponent_mat_header_row_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-header-row");
  }
}
function ReportsComponent_mat_row_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-row");
  }
}
var ReportsComponent = class _ReportsComponent {
  constructor() {
    this.selectedPeriod = "Q1-2024";
    this.kpiColumns = ["metric", "value", "target", "status"];
    this.kpiData = [
      { metric: "Days Sales Outstanding (DSO)", value: "42 days", target: "39 days", status: "at-risk" },
      { metric: "Collection Rate", value: "87.3%", target: "90%", status: "at-risk" },
      { metric: "Total Invoiced", value: "\u20AC4,750,000", target: "\u20AC4,500,000", status: "on-track" },
      { metric: "Overdue Amount", value: "\u20AC420,000", target: "< \u20AC300,000", status: "off-track" },
      { metric: "Overdue Invoice Count", value: "23", target: "< 15", status: "off-track" },
      { metric: "Avg Days to Pay (Actual)", value: "38 days", target: "30 days", status: "at-risk" },
      { metric: "High Risk Invoices", value: "9", target: "< 5", status: "off-track" },
      { metric: "On-Time Payment Rate", value: "82%", target: "88%", status: "at-risk" }
    ];
    this.lineChartData = {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      datasets: [
        { label: "DSO (days)", data: [38, 40, 45, 41, 44, 42], borderColor: "#3d52a0", backgroundColor: "rgba(61,82,160,0.08)", tension: 0.4, fill: true, pointBackgroundColor: "#3d52a0" },
        { label: "Target", data: [39, 39, 39, 39, 39, 39], borderColor: "#10b981", borderDash: [6, 3], backgroundColor: "transparent", tension: 0, pointRadius: 0 }
      ]
    };
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "top", labels: { font: { family: "Inter", size: 12 }, usePointStyle: true } } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: "Inter" } } },
        y: { grid: { color: "rgba(0,0,0,0.04)" }, ticks: { font: { family: "Inter" }, callback: (v) => v + "d" } }
      }
    };
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(t) {
      return new (t || _ReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [2, "display", "flex", "gap", "10px", "align-items", "center"], [2, "width", "140px", 3, "ngModelChange", "ngModel"], ["value", "Q1-2024"], ["value", "Q4-2023"], ["value", "Q3-2023"], ["mat-stroked-button", ""], ["mat-raised-button", "", "color", "primary"], [1, "reports-grid"], [1, "table-container", "kpi-section"], [1, "table-header"], [3, "dataSource"], ["matColumnDef", "metric"], [4, "matHeaderCellDef"], ["class", "fw-600", 4, "matCellDef"], ["matColumnDef", "value"], ["matColumnDef", "target"], ["class", "text-muted", 4, "matCellDef"], ["matColumnDef", "status"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "chart-card"], [1, "chart-header"], [2, "height", "260px"], ["baseChart", "", "type", "line", 3, "data", "options"], [1, "fw-600"], [1, "text-muted"], [1, "kpi-status"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "Financial Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "KPI summary and billing performance metrics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "mat-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_mat_select_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
          return $event;
        });
        \u0275\u0275elementStart(8, "mat-option", 4);
        \u0275\u0275text(9, "Q1 2024");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-option", 5);
        \u0275\u0275text(11, "Q4 2023");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-option", 6);
        \u0275\u0275text(13, "Q3 2023");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 7)(15, "mat-icon");
        \u0275\u0275text(16, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Export Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 8)(19, "mat-icon");
        \u0275\u0275text(20, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Export PDF ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 9)(23, "div", 10)(24, "div", 11)(25, "h3");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-table", 12);
        \u0275\u0275elementContainerStart(28, 13);
        \u0275\u0275template(29, ReportsComponent_mat_header_cell_29_Template, 2, 0, "mat-header-cell", 14)(30, ReportsComponent_mat_cell_30_Template, 2, 1, "mat-cell", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(31, 16);
        \u0275\u0275template(32, ReportsComponent_mat_header_cell_32_Template, 2, 0, "mat-header-cell", 14)(33, ReportsComponent_mat_cell_33_Template, 2, 1, "mat-cell", 15);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(34, 17);
        \u0275\u0275template(35, ReportsComponent_mat_header_cell_35_Template, 2, 0, "mat-header-cell", 14)(36, ReportsComponent_mat_cell_36_Template, 2, 1, "mat-cell", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(37, 19);
        \u0275\u0275template(38, ReportsComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 14)(39, ReportsComponent_mat_cell_39_Template, 6, 6, "mat-cell", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(40, ReportsComponent_mat_header_row_40_Template, 1, 0, "mat-header-row", 21)(41, ReportsComponent_mat_row_41_Template, 1, 0, "mat-row", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 23)(43, "div", 24)(44, "h3");
        \u0275\u0275text(45, "DSO Trend vs Target");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 25);
        \u0275\u0275element(47, "canvas", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1("KPI Summary \u2014 ", ctx.selectedPeriod, "");
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.kpiData);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeaderRowDef", ctx.kpiColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.kpiColumns);
        \u0275\u0275advance(6);
        \u0275\u0275property("data", ctx.lineChartData)("options", ctx.lineChartOptions);
      }
    }, dependencies: [CommonModule, TitleCasePipe, FormsModule, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSelectModule, MatSelect, MatOption, NgChartsModule, BaseChartDirective], styles: ["\n\n.reports-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 1000px) {\n  .reports-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.reports-grid[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.kpi-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.kpi-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.kpi-status.on-track[_ngcontent-%COMP%] {\n  color: #065f46;\n  background: #d1fae5;\n}\n.kpi-status.at-risk[_ngcontent-%COMP%] {\n  color: #92400e;\n  background: #fef3c7;\n}\n.kpi-status.off-track[_ngcontent-%COMP%] {\n  color: #991b1b;\n  background: #fee2e2;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src\\app\\features\\reports\\reports.component.ts", lineNumber: 20 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-NUWNLPFV.js.map
