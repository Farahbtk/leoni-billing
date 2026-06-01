import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice, InvoiceStatus } from '../../../models/invoice.model';

@Component({
  selector: 'app-invoice-form-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule
  ],
  template: `
    <h2 mat-dialog-title style="margin-bottom:0">{{ isEdit ? 'Edit Invoice' : 'New Invoice' }}</h2>

    <mat-dialog-content style="padding-top:16px">
      <form [formGroup]="form"
            style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;min-width:480px">

        <mat-form-field appearance="outline">
          <mat-label>Invoice Number</mat-label>
          <input matInput formControlName="invoiceNumber" placeholder="INV-2026-001">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Client ID</mat-label>
          <input matInput type="number" formControlName="clientId" placeholder="1">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Amount (EUR)</mat-label>
          <input matInput type="number" formControlName="amount" placeholder="0.00">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status">
            <mat-option *ngFor="let s of statusOptions" [value]="s">{{ s }}</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Issue Date</mat-label>
          <input matInput type="date" formControlName="issueDate">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Due Date</mat-label>
          <input matInput type="date" formControlName="dueDate">
        </mat-form-field>

        <mat-form-field appearance="outline" style="grid-column:1/-1">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="2"
                    placeholder="Optional description..."></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" style="gap:8px;padding:8px 24px 20px">
      <button mat-stroked-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary"
              [disabled]="form.invalid || saving"
              (click)="save()">
        <mat-spinner *ngIf="saving" diameter="16"
                     style="display:inline-block;margin-right:6px;vertical-align:middle">
        </mat-spinner>
        {{ isEdit ? 'Save Changes' : 'Create Invoice' }}
      </button>
    </mat-dialog-actions>
  `
})
export class InvoiceFormDialogComponent {
  form: FormGroup;
  isEdit: boolean;
  saving = false;
  statusOptions: InvoiceStatus[] = ['PAID', 'OVERDUE', 'PENDING'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InvoiceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice?: Invoice },
    private invoiceService: InvoiceService,
    private snack: MatSnackBar
  ) {
    this.isEdit = !!data?.invoice;
    const inv = data?.invoice;
    this.form = this.fb.group({
      invoiceNumber: [inv?.invoiceNumber ?? '',   Validators.required],
      clientId:      [inv?.clientId      ?? null, [Validators.required, Validators.min(1)]],
      amount:        [inv?.amount        ?? null, [Validators.required, Validators.min(0)]],
      status:        [inv?.status        ?? 'PENDING', Validators.required],
      issueDate:     [inv?.issueDate     ?? '',   Validators.required],
      dueDate:       [inv?.dueDate       ?? '',   Validators.required],
      description:   [inv?.description   ?? '']
    });
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const payload = this.form.value;
    const op = this.isEdit
      ? this.invoiceService.update(this.data.invoice!.id, payload)
      : this.invoiceService.create(payload);

    op.subscribe({
      next:  (result) => this.dialogRef.close(result),
      error: () => {
        this.saving = false;
        this.snack.open('Save failed — check backend connection', 'Close', { duration: 4000 });
      }
    });
  }
}
