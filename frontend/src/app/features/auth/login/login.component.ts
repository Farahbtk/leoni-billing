import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';

type LoginMode = 'login' | 'forgot' | 'reset';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const pw = group.get('newPassword')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pw && confirm && pw !== confirm ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatIconModule,
    MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mode: LoginMode = 'login';
  loading = false;
  hidePassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;

  // Stores the email from step 1
  resetEmail = '';
  demoCode: string | null = null;

  loginForm: FormGroup;
  forgotForm: FormGroup;
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetForm = this.fb.group({
      code:            ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      newPassword:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  // ── Login ──────────────────────────────────────────────────────────────────

  submit(): void {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.auth.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        this.loading = false;
        const msg = err.status === 401
          ? (err.error?.message ?? 'Invalid email or password')
          : 'Server error. Please try again.';
        this.snack.open(msg, 'Close', { duration: 4000, panelClass: 'snack-error' });
      }
    });
  }

  get emailError(): string {
    const c = this.loginForm.get('email');
    if (c?.hasError('required')) return 'Email is required';
    if (c?.hasError('email'))    return 'Enter a valid email address';
    return '';
  }

  // ── Forgot Password Step 1 ─────────────────────────────────────────────────

  sendCode(): void {
    if (this.forgotForm.invalid) return;
    this.loading = true;
    const email = this.forgotForm.value.email;
    this.auth.forgotPassword(email).subscribe({
      next: () => {
        this.loading = false;
        this.resetEmail = email;
        this.mode = 'reset';
      },
      error: (err) => {
        this.loading = false;
        const msg = err.error?.message ?? 'No account found with this email';
        this.snack.open(msg, 'Close', { duration: 4000, panelClass: 'snack-error' });
      }
    });
  }

  // ── Forgot Password Step 2 ─────────────────────────────────────────────────

  doReset(): void {
    if (this.resetForm.invalid) return;
    this.loading = true;
    const { code, newPassword } = this.resetForm.value;
    this.auth.resetPassword(this.resetEmail, code, newPassword).subscribe({
      next: () => {
        this.loading = false;
        this.mode = 'login';
        this.demoCode = null;
        this.snack.open('Password reset successfully! You can now log in.', 'OK', { duration: 5000 });
      },
      error: (err) => {
        this.loading = false;
        const msg = err.error?.message ?? 'Invalid or expired code';
        this.snack.open(msg, 'Close', { duration: 4000, panelClass: 'snack-error' });
      }
    });
  }

  // ── Navigation ─────────────────────────────────────────────────────────────

  showForgot(): void {
    this.mode = 'forgot';
    this.demoCode = null;
    this.forgotForm.reset();
  }

  backToLogin(): void {
    this.mode = 'login';
    this.demoCode = null;
    this.forgotForm.reset();
    this.resetForm.reset();
  }
}
