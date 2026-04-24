import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AdminService, CreateUserPayload, UpdateUserPayload } from '../../core/services/admin.service';
import { ManagedUser } from '../../models/auth.model';

// ── Add/Edit Dialog ──────────────────────────────────────────────────────────

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatDialogModule, MatProgressSpinnerModule],
  template: `
    <h2 mat-dialog-title>{{ data.user ? 'Edit Manager' : 'Add New Manager' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>First Name</mat-label>
            <input matInput formControlName="firstName" placeholder="e.g. Sarah">
            <mat-error *ngIf="form.get('firstName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Last Name</mat-label>
            <input matInput formControlName="lastName" placeholder="e.g. Johnson">
            <mat-error *ngIf="form.get('lastName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email" placeholder="user@leoni.com">
          <mat-error *ngIf="form.get('email')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width" *ngIf="!data.user">
          <mat-label>Password</mat-label>
          <input matInput formControlName="password" type="password" placeholder="Min. 6 characters">
          <mat-error *ngIf="form.get('password')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('password')?.hasError('minlength')">Min. 6 characters</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Department</mat-label>
          <input matInput formControlName="department" placeholder="e.g. Customer Billing">
        </mat-form-field>
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
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 420px; padding-top: 8px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .full-width { width: 100%; }
    mat-dialog-content { padding-bottom: 8px; }
    mat-dialog-actions { padding: 12px 0 0; }
  `]
})
export class UserDialogComponent {
  form: FormGroup;
  saving = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user?: ManagedUser }
  ) {
    const isEdit = !!data.user;
    this.form = this.fb.group({
      firstName:  [data.user?.firstName ?? '', Validators.required],
      lastName:   [data.user?.lastName  ?? '', Validators.required],
      email:      [data.user?.email ?? '', [Validators.required, Validators.email]],
      password:   ['', isEdit ? [] : [Validators.required, Validators.minLength(6)]],
      department: [data.user?.department ?? '']
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.getRawValue());
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
  displayedColumns = ['firstName', 'lastName', 'email', 'department', 'status', 'createdAt', 'actions'];
  allUsers: ManagedUser[] = [];
  filteredUsers: ManagedUser[] = [];
  loading = true;

  searchTerm = '';
  statusFilter = '';
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
      next: users => {
        this.allUsers = users;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snack.open('Failed to load users', 'Close', { duration: 3000 });
      }
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.allUsers.filter(u => {
      const matchesSearch = !term ||
        u.firstName.toLowerCase().includes(term) ||
        u.lastName.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term);
      const matchesStatus = !this.statusFilter || u.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  onSearch(value: string): void {
    this.searchTerm = value;
    this.searchSubject.next(value);
  }

  openAddDialog(): void {
    const ref = this.dialog.open(UserDialogComponent, { data: {}, width: '480px' });
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
    const ref = this.dialog.open(UserDialogComponent, { data: { user }, width: '480px' });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      const payload: UpdateUserPayload = { firstName: result.firstName, lastName: result.lastName, email: result.email, department: result.department };
      this.adminService.updateManager(user.id, payload).subscribe({
        next: updated => {
          const idx = this.allUsers.findIndex(u => u.id === updated.id);
          if (idx >= 0) this.allUsers[idx] = updated;
          this.applyFilter();
          this.snack.open('Manager updated', 'Close', { duration: 3000 });
        },
        error: () => this.snack.open('Failed to update manager', 'Close', { duration: 4000 })
      });
    });
  }

  toggleStatus(user: ManagedUser): void {
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

  deleteManager(user: ManagedUser): void {
    if (!confirm(`Delete ${user.firstName} ${user.lastName}? This cannot be undone.`)) return;
    this.adminService.deleteManager(user.id).subscribe({
      next: () => {
        this.allUsers = this.allUsers.filter(u => u.id !== user.id);
        this.applyFilter();
        this.snack.open('Manager deleted', 'Close', { duration: 3000 });
      },
      error: () => this.snack.open('Failed to delete manager', 'Close', { duration: 4000 })
    });
  }
}
