import {
  AuthService
} from "./chunk-PADCB2SJ.js";
import {
  Router
} from "./chunk-KFYCFTGM.js";
import {
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-YGXPGOZD.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DG76QNLL.js";
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
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ORJRZS75.js";
import "./chunk-WJ3XFFVQ.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-GP3DPIH4.js";
import "./chunk-GZT44RQ4.js";
import "./chunk-IT5HHABJ.js";
import {
  CommonModule,
  NgIf
} from "./chunk-Q6QAO5LM.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5P2RJQ5K.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_ng_container_33_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_mat_spinner_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function LoginComponent_ng_container_33_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Sign in to your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 10);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_33_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-label");
    \u0275\u0275text(9, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 12);
    \u0275\u0275text(11, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 13);
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 11)(16, "mat-label");
    \u0275\u0275text(17, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-icon", 12);
    \u0275\u0275text(19, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 14);
    \u0275\u0275elementStart(21, "button", 15);
    \u0275\u0275listener("click", function LoginComponent_ng_container_33_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hidePassword = !ctx_r1.hidePassword);
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, LoginComponent_ng_container_33_mat_error_24_Template, 2, 0, "mat-error", 8)(25, LoginComponent_ng_container_33_mat_error_25_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16)(27, "button", 17);
    \u0275\u0275listener("click", function LoginComponent_ng_container_33_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForgot());
    });
    \u0275\u0275text(28, "Forgot Password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 18);
    \u0275\u0275template(30, LoginComponent_ng_container_33_mat_spinner_30_Template, 1, 0, "mat-spinner", 19)(31, LoginComponent_ng_container_33_span_31_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 20);
    \u0275\u0275text(33, "LEONI SSC Billing Admin \u2014 Restricted Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.emailError);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.hidePassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hidePassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function LoginComponent_ng_container_34_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_34_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_34_mat_spinner_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function LoginComponent_ng_container_34_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Code");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Forgot Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Enter your email to receive a reset code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 10);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_34_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendCode());
    });
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-label");
    \u0275\u0275text(9, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 12);
    \u0275\u0275text(11, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 22);
    \u0275\u0275template(13, LoginComponent_ng_container_34_mat_error_13_Template, 2, 0, "mat-error", 8)(14, LoginComponent_ng_container_34_mat_error_14_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275template(16, LoginComponent_ng_container_34_mat_spinner_16_Template, 1, 0, "mat-spinner", 19)(17, LoginComponent_ng_container_34_span_17_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23)(19, "button", 17);
    \u0275\u0275listener("click", function LoginComponent_ng_container_34_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Back to Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.forgotForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.forgotForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function LoginComponent_ng_container_35_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Code is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Must be exactly 6 digits");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 8 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_mat_spinner_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function LoginComponent_ng_container_35_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Enter the code sent to ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 10);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_35_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doReset());
    });
    \u0275\u0275elementStart(9, "mat-form-field", 11)(10, "mat-label");
    \u0275\u0275text(11, "6-digit reset code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 12);
    \u0275\u0275text(13, "pin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, LoginComponent_ng_container_35_mat_error_15_Template, 2, 0, "mat-error", 8)(16, LoginComponent_ng_container_35_mat_error_16_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 11)(18, "mat-label");
    \u0275\u0275text(19, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-icon", 12);
    \u0275\u0275text(21, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 25);
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function LoginComponent_ng_container_35_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideNewPassword = !ctx_r1.hideNewPassword);
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, LoginComponent_ng_container_35_mat_error_26_Template, 2, 0, "mat-error", 8)(27, LoginComponent_ng_container_35_mat_error_27_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 11)(29, "mat-label");
    \u0275\u0275text(30, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-icon", 12);
    \u0275\u0275text(32, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 26);
    \u0275\u0275elementStart(34, "button", 15);
    \u0275\u0275listener("click", function LoginComponent_ng_container_35_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideConfirmPassword = !ctx_r1.hideConfirmPassword);
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, LoginComponent_ng_container_35_mat_error_37_Template, 2, 0, "mat-error", 8)(38, LoginComponent_ng_container_35_mat_error_38_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 18);
    \u0275\u0275template(40, LoginComponent_ng_container_35_mat_spinner_40_Template, 1, 0, "mat-spinner", 19)(41, LoginComponent_ng_container_35_span_41_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 23)(43, "button", 17);
    \u0275\u0275listener("click", function LoginComponent_ng_container_35_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275elementStart(44, "mat-icon");
    \u0275\u0275text(45, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Back to Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.resetEmail);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.resetForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.resetForm.get("code")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.resetForm.get("code")) == null ? null : tmp_4_0.hasError("pattern"));
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.hideNewPassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hideNewPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.resetForm.get("newPassword")) == null ? null : tmp_7_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r1.resetForm.get("newPassword")) == null ? null : tmp_8_0.hasError("minlength"));
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.hideConfirmPassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hideConfirmPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r1.resetForm.get("confirmPassword")) == null ? null : tmp_11_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resetForm.hasError("passwordMismatch") && ((tmp_12_0 = ctx_r1.resetForm.get("confirmPassword")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function passwordMatchValidator(group) {
  const pw = group.get("newPassword")?.value;
  const confirm = group.get("confirmPassword")?.value;
  return pw && confirm && pw !== confirm ? { passwordMismatch: true } : null;
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router, snack) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.snack = snack;
    this.mode = "login";
    this.loading = false;
    this.hidePassword = true;
    this.hideNewPassword = true;
    this.hideConfirmPassword = true;
    this.resetEmail = "";
    this.demoCode = null;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.forgotForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.resetForm = this.fb.group({
      code: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: passwordMatchValidator });
  }
  // ── Login ──────────────────────────────────────────────────────────────────
  submit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.auth.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.loading = false;
        const msg = err.status === 401 ? err.error?.message ?? "Invalid email or password" : "Server error. Please try again.";
        this.snack.open(msg, "Close", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  get emailError() {
    const c = this.loginForm.get("email");
    if (c?.hasError("required"))
      return "Email is required";
    if (c?.hasError("email"))
      return "Enter a valid email address";
    return "";
  }
  // ── Forgot Password Step 1 ─────────────────────────────────────────────────
  sendCode() {
    if (this.forgotForm.invalid)
      return;
    this.loading = true;
    const email = this.forgotForm.value.email;
    this.auth.forgotPassword(email).subscribe({
      next: () => {
        this.loading = false;
        this.resetEmail = email;
        this.mode = "reset";
      },
      error: (err) => {
        this.loading = false;
        const msg = err.error?.message ?? "No account found with this email";
        this.snack.open(msg, "Close", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Forgot Password Step 2 ─────────────────────────────────────────────────
  doReset() {
    if (this.resetForm.invalid)
      return;
    this.loading = true;
    const { code, newPassword } = this.resetForm.value;
    this.auth.resetPassword(this.resetEmail, code, newPassword).subscribe({
      next: () => {
        this.loading = false;
        this.mode = "login";
        this.demoCode = null;
        this.snack.open("Password reset successfully! You can now log in.", "OK", { duration: 5e3 });
      },
      error: (err) => {
        this.loading = false;
        const msg = err.error?.message ?? "Invalid or expired code";
        this.snack.open(msg, "Close", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Navigation ─────────────────────────────────────────────────────────────
  showForgot() {
    this.mode = "forgot";
    this.demoCode = null;
    this.forgotForm.reset();
  }
  backToLogin() {
    this.mode = "login";
    this.demoCode = null;
    this.forgotForm.reset();
    this.resetForm.reset();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 3, consts: [[1, "login-wrapper"], [1, "login-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "brand-features"], [1, "feature-item"], [1, "login-form-panel"], [1, "login-card"], [4, "ngIf"], [1, "login-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "admin@leoni.com", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "forgot-link-row"], ["type", "button", 1, "forgot-link", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-btn", 3, "disabled"], ["diameter", "18", 4, "ngIf"], [1, "login-footer"], ["diameter", "18"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "your@email.com"], [1, "back-row"], ["matInput", "", "formControlName", "code", "placeholder", "000000", "maxlength", "6"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["matInput", "", "formControlName", "confirmPassword", 3, "type"]], template: function LoginComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(31, "div", 6)(32, "div", 7);
        \u0275\u0275template(33, LoginComponent_ng_container_33_Template, 34, 9, "ng-container", 8)(34, LoginComponent_ng_container_34_Template, 23, 6, "ng-container", 8)(35, LoginComponent_ng_container_35_Template, 47, 15, "ng-container", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275property("ngIf", ctx.mode === "login");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "forgot");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "reset");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ['@charset "UTF-8";\n\n\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.login-brand[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      145deg,\n      #1e2a4a 0%,\n      #3d52a0 60%,\n      #6c63ff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  position: relative;\n  overflow: hidden;\n}\n.login-brand[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -20%;\n  width: 500px;\n  height: 500px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  max-width: 380px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 40px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.login-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f4fc;\n  padding: 48px 32px;\n  transition: background 0.3s ease;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px;\n  box-shadow: 0 8px 40px rgba(61, 82, 160, 0.12);\n  transition: background 0.3s ease, box-shadow 0.3s ease;\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.login-card[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.login-card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.login-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border-radius: 10px !important;\n  font-size: 0.95rem;\n  font-weight: 600;\n  background: var(--primary) !important;\n  color: #fff !important;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-card[_ngcontent-%COMP%]   .login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.forgot-link-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: -4px 0 8px;\n}\n.back-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  padding: 4px 0;\n  transition: opacity 0.2s;\n  font-family: inherit;\n}\n.forgot-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.demo-code-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n}\n.demo-code-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.demo-code-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 0.85rem;\n}\n.demo-code-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.demo-code-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.demo-code-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e40af;\n  letter-spacing: 4px;\n}\n@media (max-width: 768px) {\n  .login-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form-panel[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 33 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HR75IRAL.js.map
