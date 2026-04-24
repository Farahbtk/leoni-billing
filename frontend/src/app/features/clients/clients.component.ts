import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../core/services/client.service';
import { Client, ClientStatus, CollaborationState } from '../../models/client.model';

// ── Add / Edit Dialog ────────────────────────────────────────────────────────

@Component({
  selector: 'app-client-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule,
            MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>{{ data.client ? 'Edit Client' : 'Add New Client' }}</h2>
    <mat-dialog-content [formGroup]="form" class="dialog-form">
      <div class="row-2">
        <mat-form-field appearance="outline">
          <mat-label>Company Name</mat-label>
          <input matInput formControlName="name" placeholder="BMW AG">
          <mat-error *ngIf="form.get('name')?.hasError('required')">Required</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Code</mat-label>
          <input matInput formControlName="code" placeholder="BMW001">
          <mat-error *ngIf="form.get('code')?.hasError('required')">Required</mat-error>
        </mat-form-field>
      </div>
      <div class="row-2">
        <mat-form-field appearance="outline">
          <mat-label>Country</mat-label>
          <input matInput formControlName="country" placeholder="Germany">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Industry</mat-label>
          <input matInput formControlName="industry" placeholder="Automotive">
        </mat-form-field>
      </div>
      <div class="row-2">
        <mat-form-field appearance="outline">
          <mat-label>Collaboration Since</mat-label>
          <input matInput type="date" formControlName="collaborationSince">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Collaboration State</mat-label>
          <mat-select formControlName="collaborationState">
            <mat-option value="ONGOING">Ongoing</mat-option>
            <mat-option value="SUSPENDED">Suspended</mat-option>
            <mat-option value="TERMINATED">Terminated</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="row-2">
        <mat-form-field appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status">
            <mat-option value="ACTIVE">Active</mat-option>
            <mat-option value="INACTIVE">Inactive</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Contact Email</mat-label>
          <input matInput formControlName="contactEmail" type="email">
        </mat-form-field>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-stroked-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" [disabled]="form.invalid" (click)="submit()">
        {{ data.client ? 'Save Changes' : 'Add Client' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 560px; padding-top: 8px; }
    .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    mat-form-field { width: 100%; }
  `]
})
export class ClientDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { client?: Client }
  ) {
    const c = data.client;
    this.form = this.fb.group({
      name:               [c?.name ?? '',                Validators.required],
      code:               [c?.code ?? '',                Validators.required],
      country:            [c?.country ?? ''],
      industry:           [c?.industry ?? ''],
      collaborationSince: [c?.collaborationSince ?? ''],
      collaborationState: [c?.collaborationState ?? 'ONGOING'],
      status:             [c?.status ?? 'ACTIVE'],
      contactEmail:       [c?.contactEmail ?? '']
    });
  }

  submit(): void {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}

// ── Main Component ────────────────────────────────────────────────────────────

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule, DatePipe, ReactiveFormsModule, FormsModule,
    MatTableModule, MatButtonModule, MatIconModule, MatInputModule,
    MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatTooltipModule, MatChipsModule, MatSelectModule
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  displayedColumns = ['name', 'country', 'collaborationSince', 'collaborationState', 'status', 'actions'];
  clients: Client[] = [];
  filtered: Client[] = [];
  searchTerm = '';
  loading = true;

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.clientService.getAll().subscribe({
      next: (data) => { this.clients = data; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const t = this.searchTerm.toLowerCase();
    this.filtered = t
      ? this.clients.filter(c =>
          c.name.toLowerCase().includes(t) ||
          (c.country ?? '').toLowerCase().includes(t))
      : [...this.clients];
  }

  openAddDialog(): void {
    this.dialog.open(ClientDialogComponent, { data: {}, width: '620px' })
      .afterClosed().subscribe(result => {
        if (!result) return;
        this.clientService.create(result).subscribe({
          next: () => { this.load(); this.snack.open('Client added', 'OK', { duration: 3000 }); },
          error: () => this.snack.open('Failed to add client', 'Close', { duration: 3000 })
        });
      });
  }

  openEditDialog(client: Client): void {
    this.dialog.open(ClientDialogComponent, { data: { client }, width: '620px' })
      .afterClosed().subscribe(result => {
        if (!result) return;
        this.clientService.update(client.id, { ...client, ...result }).subscribe({
          next: () => { this.load(); this.snack.open('Client updated', 'OK', { duration: 3000 }); },
          error: () => this.snack.open('Failed to update client', 'Close', { duration: 3000 })
        });
      });
  }

  deleteClient(client: Client): void {
    if (!confirm(`Delete ${client.name}? This cannot be undone.`)) return;
    this.clientService.delete(client.id).subscribe({
      next: () => { this.load(); this.snack.open('Client deleted', 'OK', { duration: 3000 }); },
      error: () => this.snack.open('Failed to delete client', 'Close', { duration: 3000 })
    });
  }

  stateLabel(state: CollaborationState): string {
    return { ONGOING: 'Ongoing', SUSPENDED: 'Suspended', TERMINATED: 'Terminated' }[state] ?? state;
  }

  stateClass(state: CollaborationState): string {
    return { ONGOING: 'chip-active', SUSPENDED: 'chip-warn', TERMINATED: 'chip-inactive' }[state] ?? '';
  }

  statusClass(status: ClientStatus): string {
    return status === 'ACTIVE' ? 'chip-active' : 'chip-inactive';
  }
}
