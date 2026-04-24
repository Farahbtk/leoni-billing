import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule, CurrencyPipe, DatePipe,
    MatButtonModule, MatIconModule, MatTableModule,
    MatProgressSpinnerModule, MatTooltipModule, MatSnackBarModule
  ],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  displayedColumns = ['invoiceNumber', 'clientName', 'amount', 'dueDate', 'riskScore', 'daysOverdue', 'action'];

  running = false;
  hasRun = false;
  highRiskInvoices: Invoice[] = [];
  reviewedIds = new Set<number>();

  constructor(
    private invoiceService: InvoiceService,
    private snack: MatSnackBar
  ) {}

  runPrediction(): void {
    this.running = true;
    this.reviewedIds.clear();
    this.invoiceService.runPredictionAll().subscribe({
      next: (data) => {
        this.highRiskInvoices = data;
        this.hasRun = true;
        this.running = false;
        const msg = data.length
          ? `Found ${data.length} high-risk invoice${data.length > 1 ? 's' : ''}`
          : 'No high-risk invoices detected';
        this.snack.open(msg, 'OK', { duration: 4000 });
      },
      error: () => {
        this.running = false;
        this.snack.open('Prediction service unavailable. Please try again.', 'Close', { duration: 5000 });
      }
    });
  }

  markReviewed(invoice: Invoice): void {
    this.reviewedIds.add(invoice.id);
  }

  isReviewed(invoice: Invoice): boolean {
    return this.reviewedIds.has(invoice.id);
  }

  get totalAmount(): number {
    return this.highRiskInvoices.reduce((s, i) => s + i.amount, 0);
  }

  get avgRiskScore(): number {
    if (!this.highRiskInvoices.length) return 0;
    return Math.round(
      this.highRiskInvoices.reduce((s, i) => s + (i.riskScore ?? 0), 0) /
      this.highRiskInvoices.length
    );
  }

  get pendingReviewCount(): number {
    return this.highRiskInvoices.filter(i => !this.reviewedIds.has(i.id)).length;
  }

  riskClass(score: number): string {
    if (score >= 70) return 'risk-high';
    if (score >= 50) return 'risk-medium';
    return 'risk-low';
  }
}
