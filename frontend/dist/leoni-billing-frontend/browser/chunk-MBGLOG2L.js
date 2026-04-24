import {
  AuthService
} from "./chunk-VI4JGZMU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-B6XYKTXD.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-SR36QCJI.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GPZBMSS.js";
import "./chunk-QKNRMUAZ.js";
import {
  Router
} from "./chunk-YSSCNL4Y.js";
import "./chunk-PYIK4VV4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-II2NPOOE.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_spinner_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
}
function LoginComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router, snack) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.snack = snack;
    this.loading = false;
    this.hidePassword = true;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.loading = false;
        const msg = err.status === 401 ? "Invalid email or password" : "Server error. Please try again.";
        this.snack.open(msg, "Close", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  get emailError() {
    const c = this.form.get("email");
    if (c?.hasError("required"))
      return "Email is required";
    if (c?.hasError("email"))
      return "Enter a valid email address";
    return "";
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 9, consts: [[1, "login-wrapper"], [1, "login-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "brand-features"], [1, "feature-item"], [1, "login-form-panel"], [1, "login-card"], [1, "login-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "admin@leoni.com", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-btn", 3, "disabled"], ["diameter", "18", 4, "ngIf"], [1, "login-footer"], ["diameter", "18"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "electric_bolt");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "LEONI Tunisia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Shared Service Center \u2014 Customer Billing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "mat-icon");
        \u0275\u0275text(13, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "AI-Powered Risk Prediction");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 5)(17, "mat-icon");
        \u0275\u0275text(18, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Invoice & Payment Tracking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "mat-icon");
        \u0275\u0275text(23, "notifications_active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Real-time Overdue Alerts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 5)(27, "mat-icon");
        \u0275\u0275text(28, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Financial Reports & Export");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(31, "div", 6)(32, "div", 7)(33, "div", 8)(34, "h2");
        \u0275\u0275text(35, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "Sign in to your admin account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "form", 9);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-label");
        \u0275\u0275text(41, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-icon", 11);
        \u0275\u0275text(43, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 12);
        \u0275\u0275elementStart(45, "mat-error");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "mat-form-field", 10)(48, "mat-label");
        \u0275\u0275text(49, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-icon", 11);
        \u0275\u0275text(51, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 13);
        \u0275\u0275elementStart(53, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_53_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(54, "mat-icon");
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, LoginComponent_mat_error_56_Template, 2, 0, "mat-error", 15)(57, LoginComponent_mat_error_57_Template, 2, 0, "mat-error", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 16);
        \u0275\u0275template(59, LoginComponent_mat_spinner_59_Template, 1, 0, "mat-spinner", 17)(60, LoginComponent_span_60_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "p", 18);
        \u0275\u0275text(62, " LEONI SSC Billing Admin \u2014 Restricted Access ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(38);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.emailError);
        \u0275\u0275advance(6);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("minlength"));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ['@charset "UTF-8";\n\n\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.login-brand[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      145deg,\n      #1e2a4a 0%,\n      #3d52a0 60%,\n      #6c63ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  position: relative;\n  overflow: hidden;\n}\n.login-brand[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -20%;\n  width: 500px;\n  height: 500px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  max-width: 380px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 40px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f4fc;\n  padding: 48px 32px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px;\n  box-shadow: 0 8px 40px rgba(61, 82, 160, 0.12);\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.login-card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.login-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border-radius: 10px !important;\n  font-size: 0.95rem;\n  font-weight: 600;\n  background: var(--primary) !important;\n  color: #fff !important;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-card[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n@media (max-width: 768px) {\n  .login-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 23 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-MBGLOG2L.js.map
