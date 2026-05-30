import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-AMVAWGVG.js";
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
  MatChip,
  MatChipAvatar,
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
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  NgForOf,
  NgIf
} from "./chunk-E6MJ6NZN.js";
import {
  Subject,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UIKDKAPR.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/admin/users`;
  }
  getManagers() {
    return this.http.get(this.url);
  }
  createManager(payload) {
    return this.http.post(this.url, payload);
  }
  updateManager(id, payload) {
    return this.http.put(`${this.url}/${id}`, payload);
  }
  toggleStatus(id) {
    return this.http.put(`${this.url}/${id}/status`, {});
  }
  deleteManager(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function AdminService_Factory(t) {
      return new (t || _AdminService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/user-management/user-management.component.ts
function UserDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function UserDialogComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_form_field_27_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_form_field_27_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Min. 8 characters");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_form_field_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 18);
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function UserDialogComponent_mat_form_field_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hidePw = !ctx_r2.hidePw);
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserDialogComponent_mat_form_field_27_mat_error_7_Template, 2, 0, "mat-error", 5)(8, UserDialogComponent_mat_form_field_27_mat_error_8_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.hidePw ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.hidePw ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("password")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.form.get("password")) == null ? null : tmp_4_0.hasError("minlength"));
  }
}
function UserDialogComponent_div_28_mat_form_field_3_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_div_28_mat_form_field_3_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Min. 8 characters");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_div_28_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 18);
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function UserDialogComponent_div_28_mat_form_field_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hidePw = !ctx_r2.hidePw);
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserDialogComponent_div_28_mat_form_field_3_mat_error_7_Template, 2, 0, "mat-error", 5)(8, UserDialogComponent_div_28_mat_form_field_3_mat_error_8_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.hidePw ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.hidePw ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.form.get("password")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.form.get("password")) == null ? null : tmp_5_0.hasError("minlength"));
  }
}
function UserDialogComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-checkbox", 21);
    \u0275\u0275listener("change", function UserDialogComponent_div_28_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangePasswordToggle($event.checked));
    });
    \u0275\u0275text(2, " Change Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserDialogComponent_div_28_mat_form_field_3_Template, 9, 4, "mat-form-field", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r2.form.get("changePassword")) == null ? null : tmp_1_0.value);
  }
}
function UserDialogComponent_mat_spinner_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
  }
}
function UserManagementComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UserManagementComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("value", d_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3);
  }
}
function UserManagementComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading users\u2026");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_div_40_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275text(8, "Billing Manager");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r4.firstName[0], "", u_r4.lastName[0], "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r4.firstName, " ", u_r4.lastName, "");
  }
}
function UserManagementComponent_div_40_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.email);
  }
}
function UserManagementComponent_div_40_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.department);
  }
}
function UserManagementComponent_div_40_td_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275template(1, UserManagementComponent_div_40_td_10_span_1_Template, 2, 1, "span", 49)(2, UserManagementComponent_div_40_td_10_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const noDept_r7 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r6.department)("ngIfElse", noDept_r7);
  }
}
function UserManagementComponent_div_40_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "mat-chip")(2, "mat-icon", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r8.status === "ACTIVE" ? "chip-active" : "chip-inactive");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r8.status === "ACTIVE" ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r8.status, " ");
  }
}
function UserManagementComponent_div_40_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, u_r9.createdAt, "dd MMM yyyy"));
  }
}
function UserManagementComponent_div_40_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "button", 56);
    \u0275\u0275listener("click", function UserManagementComponent_div_40_td_19_Template_button_click_1_listener() {
      const u_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditDialog(u_r11));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 57);
    \u0275\u0275listener("click", function UserManagementComponent_div_40_td_19_Template_button_click_4_listener() {
      const u_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmToggleStatus(u_r11));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function UserManagementComponent_div_40_td_19_Template_button_click_7_listener() {
      const u_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(u_r11));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("color", u_r11.status === "ACTIVE" ? "warn" : "accent")("matTooltip", u_r11.status === "ACTIVE" ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r11.status === "ACTIVE" ? "block" : "check_circle");
  }
}
function UserManagementComponent_div_40_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 59);
  }
}
function UserManagementComponent_div_40_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 60);
  }
}
function UserManagementComponent_div_40_tr_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Try adjusting your filters");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_40_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 61)(1, "td", 62)(2, "div", 63)(3, "mat-icon");
    \u0275\u0275text(4, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No users found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UserManagementComponent_div_40_tr_22_span_7_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.displayedColumns.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.statusFilter || ctx_r1.deptFilter);
  }
}
function UserManagementComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27);
    \u0275\u0275elementContainerStart(2, 28);
    \u0275\u0275template(3, UserManagementComponent_div_40_th_3_Template, 2, 0, "th", 29)(4, UserManagementComponent_div_40_td_4_Template, 9, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 31);
    \u0275\u0275template(6, UserManagementComponent_div_40_th_6_Template, 2, 0, "th", 29)(7, UserManagementComponent_div_40_td_7_Template, 3, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 32);
    \u0275\u0275template(9, UserManagementComponent_div_40_th_9_Template, 2, 0, "th", 29)(10, UserManagementComponent_div_40_td_10_Template, 4, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 33);
    \u0275\u0275template(12, UserManagementComponent_div_40_th_12_Template, 2, 0, "th", 29)(13, UserManagementComponent_div_40_td_13_Template, 5, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 34);
    \u0275\u0275template(15, UserManagementComponent_div_40_th_15_Template, 2, 0, "th", 29)(16, UserManagementComponent_div_40_td_16_Template, 3, 4, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 36);
    \u0275\u0275template(18, UserManagementComponent_div_40_th_18_Template, 2, 0, "th", 37)(19, UserManagementComponent_div_40_td_19_Template, 10, 3, "td", 38);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, UserManagementComponent_div_40_tr_20_Template, 1, 0, "tr", 39)(21, UserManagementComponent_div_40_tr_21_Template, 1, 0, "tr", 40)(22, UserManagementComponent_div_40_tr_22_Template, 8, 2, "tr", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.filteredUsers);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
var DEPARTMENTS = ["Customer Billing", "Finance", "Collections", "HR", "Operations"];
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(data) {
    this.data = data;
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(t) {
      return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [["mat-dialog-title", "", 1, "confirm-title"], [1, "confirm-msg"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", 3, "color", "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0)(1, "mat-icon");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-dialog-content")(5, "p", 1);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-dialog-actions", 2)(8, "button", 3);
        \u0275\u0275text(9, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("color", ctx.data.color || "#ef4444");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.icon || "warning");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.title, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.message);
        \u0275\u0275advance(4);
        \u0275\u0275property("color", ctx.data.confirmColor || "warn")("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.confirmLabel || "Confirm", " ");
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon], styles: ["\n\n.confirm-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.confirm-msg[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n  margin: 0;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  min-width: 360px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 12px 0 0;\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\features\\user-management\\user-management.component.ts", lineNumber: 54 });
})();
var UserDialogComponent = class _UserDialogComponent {
  constructor(fb, dialogRef, data) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.data = data;
    this.saving = false;
    this.hidePw = true;
    this.departments = DEPARTMENTS;
    const isEdit = !!data.user;
    this.form = this.fb.group({
      firstName: [data.user?.firstName ?? "", Validators.required],
      lastName: [data.user?.lastName ?? "", Validators.required],
      email: [data.user?.email ?? "", [Validators.required, Validators.email]],
      department: [data.user?.department ?? "", Validators.required],
      changePassword: [false],
      password: ["", isEdit ? [] : [Validators.required, Validators.minLength(8)]]
    });
  }
  onChangePasswordToggle(checked) {
    const pwCtrl = this.form.get("password");
    if (checked) {
      pwCtrl.setValidators([Validators.required, Validators.minLength(8)]);
    } else {
      pwCtrl.clearValidators();
      pwCtrl.setValue("");
    }
    pwCtrl.updateValueAndValidity();
  }
  submit() {
    if (this.form.invalid)
      return;
    const { firstName, lastName, email, department, password, changePassword } = this.form.getRawValue();
    const result = { firstName, lastName, email, department };
    if (!this.data.user) {
      result.password = password;
    } else if (changePassword && password) {
      result.newPassword = password;
    }
    this.dialogRef.close(result);
  }
  static {
    this.\u0275fac = function UserDialogComponent_Factory(t) {
      return new (t || _UserDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDialogComponent, selectors: [["app-user-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 13, consts: [["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email"], ["formControlName", "department"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "class", "full-width", 4, "ngIf"], ["class", "change-pw-section", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "18", "style", "display:inline-block;margin-right:6px", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "change-pw-section"], ["formControlName", "changePassword", 3, "change"], ["diameter", "18", 2, "display", "inline-block", "margin-right", "6px"]], template: function UserDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
        \u0275\u0275text(7, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275template(9, UserDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
        \u0275\u0275text(12, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275template(14, UserDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "mat-form-field", 7)(16, "mat-label");
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 8);
        \u0275\u0275template(19, UserDialogComponent_mat_error_19_Template, 2, 0, "mat-error", 5)(20, UserDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 7)(22, "mat-label");
        \u0275\u0275text(23, "Department");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 9);
        \u0275\u0275template(25, UserDialogComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, UserDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, UserDialogComponent_mat_form_field_27_Template, 9, 4, "mat-form-field", 11)(28, UserDialogComponent_div_28_Template, 4, 1, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-dialog-actions", 13)(30, "button", 14);
        \u0275\u0275text(31, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 15);
        \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_32_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(33, UserDialogComponent_mat_spinner_33_Template, 1, 0, "mat-spinner", 16);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_7_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.user ? "Edit Manager" : "Add New Manager");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("firstName")) == null ? null : tmp_2_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("lastName")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.hasError("email"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.departments);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.form.get("department")) == null ? null : tmp_7_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data.user);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.user);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.user ? "Save Changes" : "Create Manager", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatCheckboxModule, MatCheckbox, MatIconModule, MatIcon], styles: ["\n\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 460px;\n  padding-top: 8px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.change-pw-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 4px;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 12px 0 0;\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDialogComponent, { className: "UserDialogComponent", filePath: "src\\app\\features\\user-management\\user-management.component.ts", lineNumber: 148 });
})();
var UserManagementComponent = class _UserManagementComponent {
  constructor(adminService, dialog, snack) {
    this.adminService = adminService;
    this.dialog = dialog;
    this.snack = snack;
    this.displayedColumns = ["name", "email", "department", "status", "createdAt", "actions"];
    this.allUsers = [];
    this.filteredUsers = [];
    this.loading = true;
    this.searchTerm = "";
    this.statusFilter = "";
    this.deptFilter = "";
    this.departments = DEPARTMENTS;
    this.searchSubject = new Subject();
  }
  ngOnInit() {
    this.loadUsers();
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => this.applyFilter());
  }
  loadUsers() {
    this.loading = true;
    this.adminService.getManagers().subscribe({
      next: (users) => {
        this.allUsers = users;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snack.open("Failed to load users", "Close", { duration: 3e3 });
      }
    });
  }
  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.allUsers.filter((u) => {
      const matchSearch = !term || u.firstName.toLowerCase().includes(term) || u.lastName.toLowerCase().includes(term) || u.email.toLowerCase().includes(term);
      const matchStatus = !this.statusFilter || u.status === this.statusFilter;
      const matchDept = !this.deptFilter || u.department === this.deptFilter;
      return matchSearch && matchStatus && matchDept;
    });
  }
  onSearch(value) {
    this.searchTerm = value;
    this.searchSubject.next(value);
  }
  openAddDialog() {
    const ref = this.dialog.open(UserDialogComponent, { data: {}, width: "500px" });
    ref.afterClosed().subscribe((result) => {
      if (!result)
        return;
      const payload = result;
      this.adminService.createManager(payload).subscribe({
        next: (user) => {
          this.allUsers.unshift(user);
          this.applyFilter();
          this.snack.open(`Manager ${user.firstName} ${user.lastName} created`, "Close", { duration: 3e3 });
        },
        error: (err) => this.snack.open(err.error?.message ?? "Failed to create manager", "Close", { duration: 4e3 })
      });
    });
  }
  openEditDialog(user) {
    const ref = this.dialog.open(UserDialogComponent, { data: { user }, width: "500px" });
    ref.afterClosed().subscribe((result) => {
      if (!result)
        return;
      const payload = __spreadValues({
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        department: result.department
      }, result.newPassword ? { newPassword: result.newPassword } : {});
      this.adminService.updateManager(user.id, payload).subscribe({
        next: (updated) => {
          const idx = this.allUsers.findIndex((u) => u.id === updated.id);
          if (idx >= 0)
            this.allUsers[idx] = updated;
          this.applyFilter();
          this.snack.open("Manager updated successfully", "Close", { duration: 3e3 });
        },
        error: (err) => this.snack.open(err.error?.message ?? "Failed to update manager", "Close", { duration: 4e3 })
      });
    });
  }
  confirmToggleStatus(user) {
    if (user.status === "ACTIVE") {
      const ref = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: "Deactivate Manager",
          message: `Are you sure you want to deactivate ${user.firstName} ${user.lastName}? They will no longer be able to log in.`,
          icon: "block",
          color: "#f59e0b",
          confirmLabel: "Deactivate",
          confirmColor: "warn"
        },
        width: "420px"
      });
      ref.afterClosed().subscribe((confirmed) => {
        if (confirmed)
          this.doToggleStatus(user);
      });
    } else {
      this.doToggleStatus(user);
    }
  }
  doToggleStatus(user) {
    this.adminService.toggleStatus(user.id).subscribe({
      next: (updated) => {
        const idx = this.allUsers.findIndex((u) => u.id === updated.id);
        if (idx >= 0)
          this.allUsers[idx] = updated;
        this.applyFilter();
        const action = updated.status === "ACTIVE" ? "activated" : "deactivated";
        this.snack.open(`${updated.firstName} ${updated.lastName} ${action}`, "Close", { duration: 3e3 });
      },
      error: () => this.snack.open("Failed to update status", "Close", { duration: 4e3 })
    });
  }
  confirmDelete(user) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Delete Manager",
        message: `Are you sure you want to delete ${user.firstName} ${user.lastName}? This action cannot be undone.`,
        icon: "delete_forever",
        color: "#ef4444",
        confirmLabel: "Delete",
        confirmColor: "warn"
      },
      width: "420px"
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.adminService.deleteManager(user.id).subscribe({
        next: () => {
          this.allUsers = this.allUsers.filter((u) => u.id !== user.id);
          this.applyFilter();
          this.snack.open(`${user.firstName} ${user.lastName} deleted`, "Close", { duration: 3e3 });
        },
        error: () => this.snack.open("Failed to delete manager", "Close", { duration: 4e3 })
      });
    });
  }
  static {
    this.\u0275fac = function UserManagementComponent_Factory(t) {
      return new (t || _UserManagementComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 9, consts: [["noDept", ""], [1, "um-container"], [1, "um-header"], [1, "um-title"], [1, "um-subtitle"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "um-toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Name or email\u2026", 3, "input", "value"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "filter-field"], [3, "valueChange", "selectionChange", "value"], ["value", ""], ["value", "ACTIVE"], ["value", "INACTIVE"], ["appearance", "outline", 1, "filter-field", "dept-filter"], [3, "value", 4, "ngFor", "ngForOf"], [1, "spacer"], [1, "result-count"], ["class", "um-loading", 4, "ngIf"], ["class", "um-table-wrapper", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"], [1, "um-loading"], ["diameter", "48"], [1, "um-table-wrapper"], ["mat-table", "", 1, "um-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "department"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["mat-cell", "", "class", "date-cell", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "actions-header", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "um-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "name-cell"], [1, "user-avatar"], [1, "user-fullname"], [1, "user-role"], [1, "email-cell"], ["class", "dept-chip", 4, "ngIf", "ngIfElse"], [1, "dept-chip"], [1, "muted"], ["matChipAvatar", ""], ["mat-cell", "", 1, "date-cell"], ["mat-header-cell", "", 1, "actions-header"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit manager", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "click", "color", "matTooltip"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete manager", "matTooltipPosition", "above", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "um-row"], [1, "mat-row"], [1, "mat-cell", "empty-cell"], [1, "empty-state"], [4, "ngIf"]], template: function UserManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1");
        \u0275\u0275text(4, "User Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Manage billing managers and their account access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_7_listener() {
          return ctx.openAddDialog();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Add New Manager ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Search users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-icon", 8);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275listener("input", function UserManagementComponent_Template_input_input_17_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, UserManagementComponent_button_18_Template, 3, 0, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 11)(20, "mat-label");
        \u0275\u0275text(21, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-select", 12);
        \u0275\u0275twoWayListener("valueChange", function UserManagementComponent_Template_mat_select_valueChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function UserManagementComponent_Template_mat_select_selectionChange_22_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(23, "mat-option", 13);
        \u0275\u0275text(24, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-option", 14);
        \u0275\u0275text(26, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-option", 15);
        \u0275\u0275text(28, "Inactive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "mat-form-field", 16)(30, "mat-label");
        \u0275\u0275text(31, "Department");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-select", 12);
        \u0275\u0275twoWayListener("valueChange", function UserManagementComponent_Template_mat_select_valueChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.deptFilter, $event) || (ctx.deptFilter = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function UserManagementComponent_Template_mat_select_selectionChange_32_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(33, "mat-option", 13);
        \u0275\u0275text(34, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, UserManagementComponent_mat_option_35_Template, 2, 2, "mat-option", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(36, "span", 18);
        \u0275\u0275elementStart(37, "span", 19);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(39, UserManagementComponent_div_39_Template, 4, 0, "div", 20)(40, UserManagementComponent_div_40_Template, 23, 3, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("value", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("value", ctx.statusFilter);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("value", ctx.deptFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.departments);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.filteredUsers.length, " user", ctx.filteredUsers.length !== 1 ? "s" : "", "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DatePipe,
      ReactiveFormsModule,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatNoDataRow,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatFormFieldModule,
      MatChipsModule,
      MatChip,
      MatChipAvatar,
      MatTooltipModule,
      MatTooltip,
      MatDialogModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.um-container[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.um-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.um-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a2035;\n  letter-spacing: -0.3px;\n}\n.um-header[_ngcontent-%COMP%]   .um-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.um-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.um-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.um-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.um-toolbar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  max-width: 380px;\n}\n.um-toolbar[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.um-toolbar[_ngcontent-%COMP%]   .dept-filter[_ngcontent-%COMP%] {\n  width: 170px;\n}\n.um-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.um-toolbar[_ngcontent-%COMP%]   .result-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.um-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  gap: 16px;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.um-table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.um-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.um-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #94a3b8;\n  background: #f8fafc;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.um-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 0.875rem;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.um-table[_ngcontent-%COMP%]   .um-row[_ngcontent-%COMP%] {\n  transition: background 0.15s ease;\n}\n.um-table[_ngcontent-%COMP%]   .um-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.um-table[_ngcontent-%COMP%]   .um-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2e5c,\n      #3d52a0);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-fullname[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 0.875rem;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.email-cell[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8125rem;\n  color: #475569;\n}\n.dept-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-radius: 6px;\n  padding: 2px 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\nmat-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: 600 !important;\n  height: 26px !important;\n  padding: 0 10px !important;\n  border-radius: 13px !important;\n}\nmat-chip[_ngcontent-%COMP%]   mat-icon[matChipAvatar][_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  margin-right: 4px !important;\n}\nmat-chip.chip-active[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  color: #15803d !important;\n}\nmat-chip.chip-inactive[_ngcontent-%COMP%] {\n  background: #fee2e2 !important;\n  color: #b91c1c !important;\n}\n.actions-header[_ngcontent-%COMP%], .actions-cell[_ngcontent-%COMP%] {\n  text-align: right !important;\n  padding-right: 8px !important;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transition: opacity 0.15s;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 24px;\n  color: #94a3b8;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n@media (max-width: 768px) {\n  .um-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .um-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .um-toolbar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src\\app\\features\\user-management\\user-management.component.ts", lineNumber: 208 });
})();
export {
  ConfirmDialogComponent,
  UserDialogComponent,
  UserManagementComponent
};
//# sourceMappingURL=chunk-DSZBNXK3.js.map
