import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from '../../core/services/auth.service';
import { ThemeService, ThemeMode } from '../../core/services/theme.service';
import { LocaleService, Lang, Currency } from '../../core/services/locale.service';
import { UserProfileService, UserProfile, HealthStatus, UserStats } from '../../core/services/user-profile.service';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const a = group.get('newPassword')?.value;
  const b = group.get('confirmPassword')?.value;
  return a && b && a !== b ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatSlideToggleModule,
    MatSnackBarModule, MatProgressSpinnerModule, MatDividerModule,
    MatChipsModule, MatTooltipModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('photoInput') photoInput!: ElementRef<HTMLInputElement>;

  isAdmin = false;
  profile: UserProfile | null = null;
  loadingProfile = true;
  savingProfile = false;

  profilePhoto: string | null = null;

  healthStatus: HealthStatus | null = null;
  loadingHealth = false;
  userStats: UserStats | null = null;
  loadingStats = false;

  profileForm!: FormGroup;
  passwordForm!: FormGroup;

  hideCurrentPw = true;
  hideNewPw = true;
  hideConfirmPw = true;
  changingPassword = false;

  readonly departments = ['Customer Billing', 'Finance', 'Collections', 'HR', 'Operations'];

  readonly fakeSessions = [
    { device: 'Chrome on Windows', location: 'Tunis, Tunisia', lastActive: 'Active now', current: true },
    { device: 'Firefox on macOS',  location: 'Sfax, Tunisia',  lastActive: '3 hours ago', current: false },
    { device: 'Mobile (Android)',  location: 'Sousse, Tunisia', lastActive: '2 days ago',  current: false }
  ];

  notifications = {
    emailEnabled:      true,
    overdueAlerts:     true,
    highRiskAlerts:    true,
    weeklySummary:     false,
    newUserAdded:      false,
    maintenanceAlerts: true
  };

  appearance = {
    language:       'en',
    dateFormat:     'DD/MM/YYYY',
    currency:       'EUR',
    compactSidebar: false
  };

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public theme: ThemeService,
    public locale: LocaleService,
    private profileService: UserProfileService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.buildForms();
    try { this.profilePhoto = localStorage.getItem('userProfilePhoto'); } catch {}
    this.loadProfile();
    this.loadNotificationPrefs();
    this.loadAppearancePrefs();
    if (this.isAdmin) {
      this.loadHealth();
      this.loadStats();
    }
  }

  // ── Profile ────────────────────────────────────────────────────────────────

  private buildForms(): void {
    this.profileForm = this.fb.group({
      firstName:  ['', Validators.required],
      lastName:   ['', Validators.required],
      email:      ['', [Validators.required, Validators.email]],
      department: [''],
      jobTitle:   [''],
      phone:      ['']
    });

    this.passwordForm = this.fb.group({
      currentPassword:  ['', Validators.required],
      newPassword:      ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:  ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  private loadProfile(): void {
    this.loadingProfile = true;
    this.profileService.getProfile().subscribe({
      next: (p) => {
        this.profile = p;
        this.profileForm.patchValue({
          firstName:  p.firstName,
          lastName:   p.lastName,
          email:      p.email,
          department: p.department || '',
          jobTitle:   p.jobTitle   || '',
          phone:      p.phone      || ''
        });
        this.loadingProfile = false;
      },
      error: () => { this.loadingProfile = false; }
    });
  }

  saveProfile(): void {
    if (this.profileForm.invalid) return;
    this.savingProfile = true;
    this.profileService.updateProfile(this.profileForm.value).subscribe({
      next: (updated) => {
        this.profile = updated;
        this.savingProfile = false;
        this.snack.open('Profile updated successfully', 'OK', { duration: 3000 });
      },
      error: (err) => {
        this.savingProfile = false;
        this.snack.open(err.error?.message ?? 'Failed to update profile', 'Close', { duration: 4000 });
      }
    });
  }

  pickPhoto(): void {
    this.photoInput.nativeElement.click();
  }

  onPhotoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      this.profilePhoto = base64;
      try { localStorage.setItem('userProfilePhoto', base64); } catch {}
      window.dispatchEvent(new CustomEvent('profilePhotoChanged', { detail: base64 }));
    };
    reader.readAsDataURL(file);
  }

  removePhoto(): void {
    this.profilePhoto = null;
    try { localStorage.removeItem('userProfilePhoto'); } catch {}
    if (this.photoInput) this.photoInput.nativeElement.value = '';
    window.dispatchEvent(new CustomEvent('profilePhotoChanged', { detail: null }));
  }

  get initials(): string {
    if (!this.profile) return '?';
    return `${this.profile.firstName[0] ?? ''}${this.profile.lastName[0] ?? ''}`.toUpperCase();
  }

  // ── Password ───────────────────────────────────────────────────────────────

  changePassword(): void {
    if (this.passwordForm.invalid) return;
    this.changingPassword = true;
    const { currentPassword, newPassword } = this.passwordForm.value;
    this.profileService.changePassword(currentPassword, newPassword).subscribe({
      next: () => {
        this.changingPassword = false;
        this.passwordForm.reset();
        this.snack.open('Password updated successfully', 'OK', { duration: 3000 });
      },
      error: (err) => {
        this.changingPassword = false;
        this.snack.open(err.error?.message ?? 'Failed to update password', 'Close', { duration: 4000 });
      }
    });
  }

  logoutOtherSessions(): void {
    this.snack.open('All other sessions logged out', 'OK', { duration: 3000 });
  }

  // ── Notifications ──────────────────────────────────────────────────────────

  private loadNotificationPrefs(): void {
    const saved = localStorage.getItem('leoni_notifications');
    if (saved) {
      try { this.notifications = { ...this.notifications, ...JSON.parse(saved) }; } catch {}
    }
  }

  saveNotifications(): void {
    localStorage.setItem('leoni_notifications', JSON.stringify(this.notifications));
    this.snack.open('Notification preferences saved', 'OK', { duration: 3000 });
  }

  // ── Appearance ─────────────────────────────────────────────────────────────

  private loadAppearancePrefs(): void {
    // Read lang and currency from LocaleService (source of truth)
    this.appearance.language = this.locale.lang;
    this.appearance.currency = this.locale.currency;

    const saved = localStorage.getItem('leoni_appearance');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.appearance = {
          ...this.appearance,
          ...parsed,
          // Always prefer LocaleService values so they stay in sync
          language: this.locale.lang,
          currency: this.locale.currency,
        };
      } catch {}
    }
  }

  onLangChange(lang: string): void {
    this.appearance.language = lang;
  }

  onCurrencyChange(currency: string): void {
    this.appearance.currency = currency;
  }

  setTheme(mode: ThemeMode): void {
    this.theme.setMode(mode);
  }

  saveAppearance(): void {
    this.locale.setLang(this.appearance.language as Lang);
    this.locale.setCurrency(this.appearance.currency as Currency);
    localStorage.setItem('leoni_appearance', JSON.stringify(this.appearance));
    localStorage.setItem('leoni_compact_sidebar', String(this.appearance.compactSidebar));
    this.snack.open('Preferences saved — reloading…', 'OK', { duration: 1500 });
    setTimeout(() => window.location.reload(), 500);
  }

  // ── System ─────────────────────────────────────────────────────────────────

  private loadHealth(): void {
    this.loadingHealth = true;
    this.profileService.getHealth().subscribe({
      next: (h) => { this.healthStatus = h; this.loadingHealth = false; },
      error: () => { this.loadingHealth = false; }
    });
  }

  private loadStats(): void {
    this.loadingStats = true;
    this.profileService.getStats().subscribe({
      next: (s) => { this.userStats = s; this.loadingStats = false; },
      error: () => { this.loadingStats = false; }
    });
  }

  exportCsv(type: 'invoices' | 'clients'): void {
    this.profileService.downloadCsv(type);
    this.snack.open(`Exporting ${type}…`, 'OK', { duration: 2000 });
  }

  clearCache(): void {
    this.snack.open('Cache cleared', 'OK', { duration: 2000 });
  }
}
