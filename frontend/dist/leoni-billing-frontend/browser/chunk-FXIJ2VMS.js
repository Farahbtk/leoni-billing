import {
  ClientService
} from "./chunk-7ZLLAYBM.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-MYXK7GVP.js";
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
  MatTableDataSource,
  MatTableModule
} from "./chunk-XY766PYJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GPZBMSS.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2OFQEZPN.js";
import "./chunk-PYIK4VV4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatFormField,
  MatLabel,
  MatPrefix,
  NgControlStatus,
  NgModel
} from "./chunk-RJCEXEV4.js";
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
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-II2NPOOE.js";

// src/app/features/clients/clients.component.ts
function ClientsComponent_mat_progress_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 24);
  }
}
function ClientsComponent_mat_header_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Client");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.contactEmail);
  }
}
function ClientsComponent_mat_header_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.country);
  }
}
function ClientsComponent_mat_header_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Credit Limit");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, c_r3.creditLimit, "EUR", "symbol", "1.0-0"));
  }
}
function ClientsComponent_mat_header_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Outstanding");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "div")(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-progress-bar", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 3, c_r4.totalOutstanding, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", c_r4.totalOutstanding / c_r4.creditLimit * 100)("color", c_r4.totalOutstanding / c_r4.creditLimit > 0.7 ? "warn" : "primary");
  }
}
function ClientsComponent_mat_header_cell_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Avg DSO");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", c_r5.averageDso > 50)("text-warning", c_r5.averageDso > 40 && c_r5.averageDso <= 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.averageDso, " days ");
  }
}
function ClientsComponent_mat_header_cell_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Risk Profile");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r6.getRiskClass(c_r6.riskProfile));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.riskProfile);
  }
}
function ClientsComponent_mat_header_cell_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-header-cell", 25);
    \u0275\u0275text(1, "Overdue");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_mat_cell_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", c_r8.overdueCount > 0)("fw-600", c_r8.overdueCount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", c_r8.overdueCount, " invoice", c_r8.overdueCount !== 1 ? "s" : "", " ");
  }
}
function ClientsComponent_mat_header_cell_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-header-cell");
  }
}
function ClientsComponent_mat_cell_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-cell")(1, "button", 32)(2, "mat-icon");
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 33)(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()()();
  }
}
function ClientsComponent_mat_header_row_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-header-row");
  }
}
function ClientsComponent_mat_row_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-row");
  }
}
var ClientsComponent = class _ClientsComponent {
  constructor(clientService) {
    this.clientService = clientService;
    this.displayedColumns = ["name", "country", "creditLimit", "totalOutstanding", "averageDso", "riskProfile", "overdueCount", "actions"];
    this.dataSource = new MatTableDataSource([]);
    this.searchTerm = "";
    this.loading = true;
  }
  ngOnInit() {
    this.clientService.getAll().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loading = false;
      },
      error: () => {
        this.dataSource.data = MOCK_CLIENTS;
        this.loading = false;
      }
    });
    setTimeout(() => {
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }
  getRiskClass(r) {
    return r.toLowerCase();
  }
  static {
    this.\u0275fac = function ClientsComponent_Factory(t) {
      return new (t || _ClientsComponent)(\u0275\u0275directiveInject(ClientService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["app-clients"]], viewQuery: function ClientsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 6, consts: [[1, "page-header"], [1, "page-title"], ["mat-raised-button", "", "color", "primary"], [1, "filter-bar", 2, "margin-bottom", "16px"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "placeholder", "Client name, country...", 3, "ngModelChange", "ngModel"], [1, "table-container"], [1, "table-header"], ["mode", "indeterminate", "style", "width:120px", 4, "ngIf"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "creditLimit"], ["matColumnDef", "totalOutstanding"], ["matColumnDef", "averageDso"], ["matColumnDef", "riskProfile"], ["matColumnDef", "overdueCount"], ["matColumnDef", "actions"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate", 2, "width", "120px"], ["mat-sort-header", ""], [1, "client-cell"], [1, "client-logo"], [1, "fw-600"], [1, "text-muted", 2, "font-size", "0.75rem"], ["mode", "determinate", 2, "margin-top", "4px", "border-radius", "2px", 3, "value", "color"], [1, "risk-badge"], ["mat-icon-button", "", "matTooltip", "View invoices"], ["mat-icon-button", "", "matTooltip", "Edit"]], template: function ClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "OEM Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Automotive client risk profiles and payment history");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 2)(7, "mat-icon");
        \u0275\u0275text(8, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Add Client ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3)(11, "mat-form-field", 4)(12, "mat-label");
        \u0275\u0275text(13, "Search clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-icon", 5);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_16_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 8)(19, "h3");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, ClientsComponent_mat_progress_bar_21_Template, 1, 0, "mat-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-table", 10);
        \u0275\u0275elementContainerStart(23, 11);
        \u0275\u0275template(24, ClientsComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 12)(25, ClientsComponent_mat_cell_25_Template, 9, 3, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(26, 14);
        \u0275\u0275template(27, ClientsComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 12)(28, ClientsComponent_mat_cell_28_Template, 2, 1, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(29, 15);
        \u0275\u0275template(30, ClientsComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 12)(31, ClientsComponent_mat_cell_31_Template, 3, 6, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(32, 16);
        \u0275\u0275template(33, ClientsComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 12)(34, ClientsComponent_mat_cell_34_Template, 6, 8, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(35, 17);
        \u0275\u0275template(36, ClientsComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 12)(37, ClientsComponent_mat_cell_37_Template, 3, 5, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(38, 18);
        \u0275\u0275template(39, ClientsComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 12)(40, ClientsComponent_mat_cell_40_Template, 3, 3, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 19);
        \u0275\u0275template(42, ClientsComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 12)(43, ClientsComponent_mat_cell_43_Template, 3, 6, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 20);
        \u0275\u0275template(45, ClientsComponent_mat_header_cell_45_Template, 1, 0, "mat-header-cell", 21)(46, ClientsComponent_mat_cell_46_Template, 7, 0, "mat-cell", 13);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(47, ClientsComponent_mat_header_row_47_Template, 1, 0, "mat-header-row", 22)(48, ClientsComponent_mat_row_48_Template, 1, 0, "mat-row", 23);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.dataSource.data.length, " clients");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      }
    }, dependencies: [CommonModule, NgIf, CurrencyPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatInputModule, MatInput, MatFormField, MatLabel, MatPrefix, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar], styles: ["\n\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.client-cell[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--accent));\n  color: #fff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=clients.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "src\\app\\features\\clients\\clients.component.ts", lineNumber: 25 });
})();
var MOCK_CLIENTS = [
  { id: 1, name: "BMW Group", code: "BMW", country: "Germany", industry: "Automotive", contactEmail: "ap@bmw.de", creditLimit: 5e6, paymentTermsDays: 30, riskProfile: "LOW", averageDso: 32, totalOutstanding: 415e3, totalPaid: 125e5, invoiceCount: 48, overdueCount: 0, lastPaymentDate: "2024-02-08" },
  { id: 2, name: "Volkswagen AG", code: "VW", country: "Germany", industry: "Automotive", contactEmail: "billing@vw.de", creditLimit: 8e6, paymentTermsDays: 30, riskProfile: "HIGH", averageDso: 58, totalOutstanding: 96e4, totalPaid: 182e5, invoiceCount: 62, overdueCount: 5, lastPaymentDate: "2024-01-20" },
  { id: 3, name: "Mercedes-Benz Group", code: "MBZ", country: "Germany", industry: "Automotive", contactEmail: "finance@mercedes.de", creditLimit: 6e6, paymentTermsDays: 45, riskProfile: "LOW", averageDso: 38, totalOutstanding: 195e3, totalPaid: 148e5, invoiceCount: 44, overdueCount: 1, lastPaymentDate: "2024-02-05" },
  { id: 4, name: "Stellantis", code: "STL", country: "France", industry: "Automotive", contactEmail: "ap@stellantis.com", creditLimit: 4e6, paymentTermsDays: 30, riskProfile: "MEDIUM", averageDso: 44, totalOutstanding: 62e4, totalPaid: 94e5, invoiceCount: 36, overdueCount: 2, lastPaymentDate: "2024-02-01" },
  { id: 5, name: "Renault Group", code: "RNL", country: "France", industry: "Automotive", contactEmail: "billing@renault.fr", creditLimit: 35e5, paymentTermsDays: 30, riskProfile: "MEDIUM", averageDso: 41, totalOutstanding: 38e4, totalPaid: 81e5, invoiceCount: 29, overdueCount: 1, lastPaymentDate: "2024-02-10" },
  { id: 6, name: "Toyota Motor Corp", code: "TMC", country: "Japan", industry: "Automotive", contactEmail: "payables@toyota.jp", creditLimit: 7e6, paymentTermsDays: 60, riskProfile: "LOW", averageDso: 28, totalOutstanding: 623e3, totalPaid: 21e6, invoiceCount: 71, overdueCount: 0, lastPaymentDate: "2024-02-12" },
  { id: 7, name: "Ford Motor Company", code: "FMC", country: "USA", industry: "Automotive", contactEmail: "ap@ford.com", creditLimit: 45e5, paymentTermsDays: 30, riskProfile: "HIGH", averageDso: 52, totalOutstanding: 725e3, totalPaid: 102e5, invoiceCount: 38, overdueCount: 4, lastPaymentDate: "2024-01-15" }
];
export {
  ClientsComponent
};
//# sourceMappingURL=chunk-FXIJ2VMS.js.map
