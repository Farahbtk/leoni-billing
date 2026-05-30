import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors
} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AdminService, CreateUserPayload, UpdateUserPayload } from '../../core/services/admin.service';
import { ManagedUser } from '../../models/auth.model';

const DEPARTMENTS = ['Customer Billing', 'Finance', 'Collections', 'HR', 'Operations'];

// ── Confirm Dialog ────────────────────────────────────────────────────────────

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title class="confirm-title">
      <mat-icon [style.color]="data.color || '#ef4444'">{{ data.icon || 'warning' }}</mat-icon>
      {{ data.title }}
    </h2>
    <mat-dialog-content>
      <p class="confirm-msg">{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button [color]="data.confirmColor || 'warn'" [mat-dialog-close]="true">
        {{ data.confirmLabel || 'Confirm' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .confirm-title { display: flex; align-items: center; gap: 10px; }
    .confirm-msg { color: #475569; font-size: 0.9rem; margin: 0; }
    mat-dialog-content { padding-bottom: 8px; min-width: 360px; }
    mat-dialog-actions { padding: 12px 0 0; }
  `]
})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string; message: string; icon?: string; color?: string;
    confirmLabel?: string; confirmColor?: string;
  }) {}
}

// ── Add/Edit Dialog ──────────────────────────────────────────────────────────

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatDialogModule, MatProgressSpinnerModule,
    MatSelectModule, MatCheckboxModule, MatIconModule
  ],
  template: `
    <h2 mat-dialog-title>{{ data.user ? 'Edit Manager' : 'Add New Manager' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>First Name</mat-label>
            <input matInput formControlName="firstName">
            <mat-error *ngIf="form.get('firstName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Last Name</mat-label>
            <input matInput formControlName="lastName">
            <mat-error *ngIf="form.get('lastName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email">
          <mat-error *ngIf="form.get('email')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Department</mat-label>
          <mat-select formControlName="department">
            <mat-option *ngFor="let d of departments" [value]="d">{{ d }}</mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('department')?.hasError('required')">Required</mat-error>
        </mat-form-field>

        <!-- Add mode: always show password -->
        <mat-form-field appearance="outline" class="full-width" *ngIf="!data.user">
          <mat-label>Password</mat-label>
          <input matInput formControlName="password" [type]="hidePw ? 'password' : 'text'">
          <button mat-icon-button matSuffix type="button" (click)="hidePw = !hidePw">
            <mat-icon>{{ hidePw ? 'visibility_off' : 'visibility' }}</mat-icon>
          </button>
          <mat-error *ngIf="form.get('password')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('password')?.hasError('minlength')">Min. 8 characters</mat-error>
        </mat-form-field>

        <!-- Edit mode: optional change password -->
        <div *ngIf="data.user" class="change-pw-section">
          <mat-checkbox formControlName="changePassword" (change)="onChangePasswordToggle($event.checked)">
            Change Password
          </mat-checkbox>
          <mat-form-field appearance="outline" class="full-width" *ngIf="form.get('changePassword')?.value">
            <mat-label>New Password</mat-label>
            <input matInput formControlName="password" [type]="hidePw ? 'password' : 'text'">
            <button mat-icon-button matSuffix type="button" (click)="hidePw = !hidePw">
              <mat-icon>{{ hidePw ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
            <mat-error *ngIf="form.get('password')?.hasError('required')">Required</mat-error>
            <mat-error *ngIf="form.get('password')?.hasError('minlength')">Min. 8 characters</mat-error>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" (click)="submit()" [disabled]="form.invalid || saving">
        <mat-spinner diameter="18" *ngIf="saving" style="display:inline-block;margin-right:6px"></mat-spinner>
        {{ data.user ? 'Save Changes' : 'Create Manager' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 460px; padding-top: 8px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .full-width { width: 100%; }
    .change-pw-section { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
    mat-dialog-content { padding-bottom: 8px; }
    mat-dialog-actions { padding: 12px 0 0; }
  `]
})
export class UserDialogComponent {
  form: FormGroup;
  saving = false;
  hidePw = true;
  departments = DEPARTMENTS;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user?: ManagedUser }
  ) {
    const isEdit = !!data.user;
    this.form = this.fb.group({
      firstName:      [data.user?.firstName ?? '', Validators.required],
      lastName:       [data.user?.lastName  ?? '', Validators.required],
      email:          [data.user?.email     ?? '', [Validators.required, Validators.email]],
      department:     [data.user?.department ?? '', Validators.required],
      changePassword: [false],
      password:       ['', isEdit ? [] : [Validators.required, Validators.minLength(8)]]
    });
  }

  onChangePasswordToggle(checked: boolean): void {
    const pwCtrl = this.form.get('password')!;
    if (checked) {
      pwCtrl.setValidators([Validators.required, Validators.minLength(8)]);
    } else {
      pwCtrl.clearValidators();
      pwCtrl.setValue('');
    }
    pwCtrl.updateValueAndValidity();
  }

  submit(): void {
    if (this.form.invalid) return;
    const { firstName, lastName, email, department, password, changePassword } = this.form.getRawValue();
    const result: any = { firstName, lastName, email, department };
    if (!this.data.user) {
      result.password = password;
    } else if (changePassword && password) {
      result.newPassword = password;
    }
    this.dialogRef.close(result);
  }
}

// ── Main Component ───────────────────────────────────────────────────────────

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatTableModule, MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatChipsModule, MatTooltipModule,
    MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatSelectModule
  ],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns = ['name', 'email', 'department', 'status', 'createdAt', 'actions'];
  allUsers: ManagedUser[] = [];
  filteredUsers: ManagedUser[] = [];
  loading = true;

  searchTerm = '';
  statusFilter = '';
  deptFilter = '';
  departments = DEPARTMENTS;

  private searchSubject = new Subject<string>();

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.applyFilter());
  }

  loadUsers(): void {
    this.loading = true;
    this.adminService.getManagers().subscribe({
      next: users => { this.allUsers = users; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; this.snack.open('Failed to load users', 'Close', { duration: 3000 }); }
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.allUsers.filter(u => {
      const matchSearch = !term ||
        u.firstName.toLowerCase().includes(term) ||
        u.lastName.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term);
      const matchStatus = !this.statusFilter || u.status === this.statusFilter;
      const matchDept = !this.deptFilter || u.department === this.deptFilter;
      return matchSearch && matchStatus && matchDept;
    });
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.searchSubject.next(value);
  }

  openAddDialog(): void {
    const ref = this.dialog.open(UserDialogComponent, { data: {}, width: '500px' });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      const payload: CreateUserPayload = result;
      this.adminService.createManager(payload).subscribe({
        next: user => {
          this.allUsers.unshift(user);
          this.applyFilter();
          this.snack.open(`Manager ${user.firstName} ${user.lastName} created`, 'Close', { duration: 3000 });
        },
        error: err => this.snack.open(err.error?.message ?? 'Failed to create manager', 'Close', { duration: 4000 })
      });
    });
  }

  openEditDialog(user: ManagedUser): void {
    const ref = this.dialog.open(UserDialogComponent, { data: { user }, width: '500px' });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      const payload: UpdateUserPayload = {
        firstName: result.firstName,
        lastName:  result.lastName,
        email:     result.email,
        department: result.department,
        ...(result.newPassword ? { newPassword: result.newPassword } : {})
      };
      this.adminService.updateManager(user.id, payload).subscribe({
        next: updated => {
          const idx = this.allUsers.findIndex(u => u.id === updated.id);
          if (idx >= 0) this.allUsers[idx] = updated;
          this.applyFilter();
          this.snack.open('Manager updated successfully', 'Close', { duration: 3000 });
        },
        error: err => this.snack.open(err.error?.message ?? 'Failed to update manager', 'Close', { duration: 4000 })
      });
    });
  }

  confirmToggleStatus(user: ManagedUser): void {
    if (user.status === 'ACTIVE') {
      const ref = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Deactivate Manager',
          message: `Are you sure you want to deactivate ${user.firstName} ${user.lastName}? They will no longer be able to log in.`,
          icon: 'block',
          color: '#f59e0b',
          confirmLabel: 'Deactivate',
          confirmColor: 'warn'
        },
        width: '420px'
      });
      ref.afterClosed().subscribe(confirmed => { if (confirmed) this.doToggleStatus(user); });
    } else {
      this.doToggleStatus(user);
    }
  }

  private doToggleStatus(user: ManagedUser): void {
    this.adminService.toggleStatus(user.id).subscribe({
      next: updated => {
        const idx = this.allUsers.findIndex(u => u.id === updated.id);
        if (idx >= 0) this.allUsers[idx] = updated;
        this.applyFilter();
        const action = updated.status === 'ACTIVE' ? 'activated' : 'deactivated';
        this.snack.open(`${updated.firstName} ${updated.lastName} ${action}`, 'Close', { duration: 3000 });
      },
      error: () => this.snack.open('Failed to update status', 'Close', { duration: 4000 })
    });
  }

  confirmDelete(user: ManagedUser): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Manager',
        message: `Are you sure you want to delete ${user.firstName} ${user.lastName}? This action cannot be undone.`,
        icon: 'delete_forever',
        color: '#ef4444',
        confirmLabel: 'Delete',
        confirmColor: 'warn'
      },
      width: '420px'
    });
    ref.afterClosed().subscribe(confirmed => {
      if (!confirmed) return;
      this.adminService.deleteManager(user.id).subscribe({
        next: () => {
          this.allUsers = this.allUsers.filter(u => u.id !== user.id);
          this.applyFilter();
          this.snack.open(`${user.firstName} ${user.lastName} deleted`, 'Close', { duration: 3000 });
        },
        error: () => this.snack.open('Failed to delete manager', 'Close', { duration: 4000 })
      });
    });
  }
}
