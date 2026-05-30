import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-YSBIPEPL.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-FQ7Y7MD7.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-2SDRTARJ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-EOJBJDFG.js";
import {
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CUTP3JWW.js";
import {
  MatChipsModule
} from "./chunk-WICWAED2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-MN4EUC7V.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators
} from "./chunk-744F2NYF.js";
import {
  environment
} from "./chunk-32VODOFB.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption
} from "./chunk-7F5FDPEU.js";
import "./chunk-N625QWFE.js";
import {
  HttpClient
} from "./chunk-LMCEUH37.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgIf
} from "./chunk-E6MJ6NZN.js";
import {
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UIKDKAPR.js";

// src/app/core/services/client.service.ts
var ClientService = class _ClientService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/clients`;
  }
  getAll() {
    return this.http.get(this.url);
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  create(client) {
    return this.http.post(this.url, client);
  }
  update(id, client) {
    return this.http.put(`${this.url}/${id}`, client);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getDashboardKpis() {
    return this.http.get(`${environment.apiUrl}/dashboard/kpis`);
  }
  getMonthlyData() {
    return this.http.get(`${environment.apiUrl}/dashboard/monthly`);
  }
  static {
    this.\u0275fac = function ClientService_Factory(t) {
      return new (t || _ClientService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/clients/clients.component.ts
function ClientDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ClientDialogComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ClientsComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.searchTerm = "";
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading clients\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_div_23_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Client");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.code);
  }
}
function ClientsComponent_div_23_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Country");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.country || "\u2014");
  }
}
function ClientsComponent_div_23_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Collaboration Since");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, c_r5.collaborationSince, "MMM yyyy"));
  }
}
function ClientsComponent_div_23_td_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275template(1, ClientsComponent_div_23_td_10_span_1_Template, 3, 4, "span", 38)(2, ClientsComponent_div_23_td_10_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r5.collaborationSince);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r5.collaborationSince);
  }
}
function ClientsComponent_div_23_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Collaboration State");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.stateClass(c_r6.collaborationState));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stateLabel(c_r6.collaborationState), " ");
  }
}
function ClientsComponent_div_23_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "span", 41);
    \u0275\u0275element(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(c_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r7.status, " ");
  }
}
function ClientsComponent_div_23_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 44)(1, "button", 45);
    \u0275\u0275listener("click", function ClientsComponent_div_23_td_19_Template_button_click_1_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditDialog(c_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function ClientsComponent_div_23_td_19_Template_button_click_4_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteClient(c_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ClientsComponent_div_23_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function ClientsComponent_div_23_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function ClientsComponent_div_23_tr_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Try adjusting your search");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_23_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50)(2, "div", 51)(3, "mat-icon");
    \u0275\u0275text(4, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No clients found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ClientsComponent_div_23_tr_22_span_7_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm);
  }
}
function ClientsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17);
    \u0275\u0275elementContainerStart(2, 18);
    \u0275\u0275template(3, ClientsComponent_div_23_th_3_Template, 2, 0, "th", 19)(4, ClientsComponent_div_23_td_4_Template, 9, 3, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 21);
    \u0275\u0275template(6, ClientsComponent_div_23_th_6_Template, 2, 0, "th", 19)(7, ClientsComponent_div_23_td_7_Template, 3, 1, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 22);
    \u0275\u0275template(9, ClientsComponent_div_23_th_9_Template, 2, 0, "th", 19)(10, ClientsComponent_div_23_td_10_Template, 3, 2, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 23);
    \u0275\u0275template(12, ClientsComponent_div_23_th_12_Template, 2, 0, "th", 19)(13, ClientsComponent_div_23_td_13_Template, 3, 2, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 24);
    \u0275\u0275template(15, ClientsComponent_div_23_th_15_Template, 2, 0, "th", 19)(16, ClientsComponent_div_23_td_16_Template, 4, 2, "td", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 25);
    \u0275\u0275template(18, ClientsComponent_div_23_th_18_Template, 2, 0, "th", 26)(19, ClientsComponent_div_23_td_19_Template, 7, 0, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, ClientsComponent_div_23_tr_20_Template, 1, 0, "tr", 28)(21, ClientsComponent_div_23_tr_21_Template, 1, 0, "tr", 29)(22, ClientsComponent_div_23_tr_22_Template, 8, 2, "tr", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filtered);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
var ClientDialogComponent = class _ClientDialogComponent {
  constructor(fb, dialogRef, data) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.data = data;
    const c = data.client;
    this.form = this.fb.group({
      name: [c?.name ?? "", Validators.required],
      code: [c?.code ?? "", Validators.required],
      country: [c?.country ?? ""],
      industry: [c?.industry ?? ""],
      collaborationSince: [c?.collaborationSince ?? ""],
      collaborationState: [c?.collaborationState ?? "ONGOING"],
      status: [c?.status ?? "ACTIVE"],
      contactEmail: [c?.contactEmail ?? ""]
    });
  }
  submit() {
    if (this.form.valid)
      this.dialogRef.close(this.form.value);
  }
  static {
    this.\u0275fac = function ClientDialogComponent_Factory(t) {
      return new (t || _ClientDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDialogComponent, selectors: [["app-client-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 6, consts: [["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], [1, "row-2"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "BMW AG"], [4, "ngIf"], ["matInput", "", "formControlName", "code", "placeholder", "BMW001"], ["matInput", "", "formControlName", "country", "placeholder", "Germany"], ["matInput", "", "formControlName", "industry", "placeholder", "Automotive"], ["matInput", "", "type", "date", "formControlName", "collaborationSince"], ["formControlName", "collaborationState"], ["value", "ONGOING"], ["value", "SUSPENDED"], ["value", "TERMINATED"], ["formControlName", "status"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["matInput", "", "formControlName", "contactEmail", "type", "email"], ["align", "end"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"]], template: function ClientDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        \u0275\u0275text(6, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "input", 4);
        \u0275\u0275template(8, ClientDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
        \u0275\u0275text(11, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 6);
        \u0275\u0275template(13, ClientDialogComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 2)(15, "mat-form-field", 3)(16, "mat-label");
        \u0275\u0275text(17, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 3)(20, "mat-label");
        \u0275\u0275text(21, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 2)(24, "mat-form-field", 3)(25, "mat-label");
        \u0275\u0275text(26, "Collaboration Since");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-form-field", 3)(29, "mat-label");
        \u0275\u0275text(30, "Collaboration State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-select", 10)(32, "mat-option", 11);
        \u0275\u0275text(33, "Ongoing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 12);
        \u0275\u0275text(35, "Suspended");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 13);
        \u0275\u0275text(37, "Terminated");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 2)(39, "mat-form-field", 3)(40, "mat-label");
        \u0275\u0275text(41, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-select", 14)(43, "mat-option", 15);
        \u0275\u0275text(44, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 16);
        \u0275\u0275text(46, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "mat-form-field", 3)(48, "mat-label");
        \u0275\u0275text(49, "Contact Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "mat-dialog-actions", 18)(52, "button", 19);
        \u0275\u0275text(53, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 20);
        \u0275\u0275listener("click", function ClientDialogComponent_Template_button_click_54_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.client ? "Edit Client" : "Add New Client");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("code")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance(41);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.client ? "Save Changes" : "Add Client", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule], styles: ["\n\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 560px;\n  padding-top: 8px;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=clients.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDialogComponent, { className: "ClientDialogComponent", filePath: "src\\app\\features\\clients\\clients.component.ts", lineNumber: 91 });
})();
var ClientsComponent = class _ClientsComponent {
  constructor(clientService, dialog, snack) {
    this.clientService = clientService;
    this.dialog = dialog;
    this.snack = snack;
    this.displayedColumns = ["name", "country", "collaborationSince", "collaborationState", "status", "actions"];
    this.clients = [];
    this.filtered = [];
    this.searchTerm = "";
    this.loading = true;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.clientService.getAll().subscribe({
      next: (data) => {
        this.clients = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const t = this.searchTerm.toLowerCase();
    this.filtered = t ? this.clients.filter((c) => c.name.toLowerCase().includes(t) || (c.country ?? "").toLowerCase().includes(t)) : [...this.clients];
  }
  openAddDialog() {
    this.dialog.open(ClientDialogComponent, { data: {}, width: "620px" }).afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.clientService.create(result).subscribe({
        next: () => {
          this.load();
          this.snack.open("Client added", "OK", { duration: 3e3 });
        },
        error: () => this.snack.open("Failed to add client", "Close", { duration: 3e3 })
      });
    });
  }
  openEditDialog(client) {
    this.dialog.open(ClientDialogComponent, { data: { client }, width: "620px" }).afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.clientService.update(client.id, __spreadValues(__spreadValues({}, client), result)).subscribe({
        next: () => {
          this.load();
          this.snack.open("Client updated", "OK", { duration: 3e3 });
        },
        error: () => this.snack.open("Failed to update client", "Close", { duration: 3e3 })
      });
    });
  }
  deleteClient(client) {
    if (!confirm(`Delete ${client.name}? This cannot be undone.`))
      return;
    this.clientService.delete(client.id).subscribe({
      next: () => {
        this.load();
        this.snack.open("Client deleted", "OK", { duration: 3e3 });
      },
      error: () => this.snack.open("Failed to delete client", "Close", { duration: 3e3 })
    });
  }
  stateLabel(state) {
    return { ONGOING: "Ongoing", SUSPENDED: "Suspended", TERMINATED: "Terminated" }[state] ?? state;
  }
  stateClass(state) {
    return { ONGOING: "chip-active", SUSPENDED: "chip-warn", TERMINATED: "chip-inactive" }[state] ?? "";
  }
  statusClass(status) {
    return status === "ACTIVE" ? "chip-active" : "chip-inactive";
  }
  static {
    this.\u0275fac = function ClientsComponent_Factory(t) {
      return new (t || _ClientsComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["app-clients"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 6, consts: [[1, "clients-container"], [1, "page-header"], [1, "page-title"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Name or country\u2026", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], [1, "result-count"], ["class", "loading-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], [1, "loading-state"], ["diameter", "48"], [1, "table-wrapper"], ["mat-table", "", 1, "clients-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "collaborationSince"], ["matColumnDef", "collaborationState"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions-header", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "client-cell"], [1, "client-avatar"], [1, "client-name"], [1, "client-code"], [1, "country-cell"], [4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "muted"], [1, "status-chip", 3, "ngClass"], [1, "dot"], ["mat-header-cell", "", 1, "actions-header"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete", "matTooltipPosition", "above", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row"], [1, "mat-row"], [1, "mat-cell", "empty-cell"], [1, "empty-state"]], template: function ClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Manage OEM client partnerships and collaboration status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function ClientsComponent_Template_button_click_7_listener() {
          return ctx.openAddDialog();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Add Client ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "mat-form-field", 5)(13, "mat-label");
        \u0275\u0275text(14, "Search clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-icon", 6);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_17_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, ClientsComponent_button_18_Template, 3, 0, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "span", 9);
        \u0275\u0275elementStart(20, "span", 10);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, ClientsComponent_div_22_Template, 4, 0, "div", 11)(23, ClientsComponent_div_23_Template, 23, 3, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchTerm);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.filtered.length, " client", ctx.filtered.length !== 1 ? "s" : "", "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DatePipe, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormsModule, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatPrefix, MatSuffix, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip, MatChipsModule, MatSelectModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.clients-container[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.toolbar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 380px;\n}\n.toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%]   .result-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  gap: 16px;\n  color: #64748b;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.clients-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.clients-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #94a3b8;\n  background: #f8fafc;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.clients-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 0.875rem;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.clients-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.clients-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.clients-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.client-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.client-cell[_ngcontent-%COMP%]   .client-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2e5c,\n      #3b5998);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.client-cell[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.client-cell[_ngcontent-%COMP%]   .client-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-family: monospace;\n}\n.country-cell[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.status-chip.chip-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.status-chip.chip-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.status-chip.chip-warn[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.actions-header[_ngcontent-%COMP%], .actions-cell[_ngcontent-%COMP%] {\n  text-align: right !important;\n  padding-right: 8px !important;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 24px;\n  color: #94a3b8;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  opacity: 0.35;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n/*# sourceMappingURL=clients.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "src\\app\\features\\clients\\clients.component.ts", lineNumber: 131 });
})();
export {
  ClientDialogComponent,
  ClientsComponent
};
//# sourceMappingURL=chunk-CIQ47EAW.js.map
