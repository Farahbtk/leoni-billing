import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-invoice-delete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title style="display:flex;align-items:center;gap:10px">
      <mat-icon style="color:#ef4444">delete_forever</mat-icon>
      Delete Invoice
    </h2>

    <mat-dialog-content>
      <p style="margin:0;line-height:1.6">
        Are you sure you want to delete invoice
        <strong>{{ data.invoiceNumber }}</strong>?<br>
        This action cannot be undone.
      </p>
    </mat-dialog-content>

    <mat-dialog-actions align="end" style="gap:8px;padding:8px 24px 20px">
      <button mat-stroked-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="warn" (click)="confirm()">Delete</button>
    </mat-dialog-actions>
  `
})
export class InvoiceDeleteDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<InvoiceDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceNumber: string }
  ) {}

  confirm(): void { this.dialogRef.close(true); }
}
