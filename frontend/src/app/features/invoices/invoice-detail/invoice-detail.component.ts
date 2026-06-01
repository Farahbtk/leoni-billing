import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { InvoiceService } from '../../../core/services/invoice.service';
import { LocaleService } from '../../../core/services/locale.service';
import { Invoice } from '../../../models/invoice.model';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice | null = null;
  loading = true;
  error   = false;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    public  locale: LocaleService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    const raw = this.route.snapshot.paramMap.get('id');
    const id  = Number(raw);
    console.log('[InvoiceDetail] id param =', raw, '→', id);

    if (!id || isNaN(id)) {
      console.error('[InvoiceDetail] Invalid id, aborting');
      this.loading = false;
      this.error   = true;
      return;
    }

    this.invoiceService.getById(id).subscribe({
      next: (inv) => {
        console.log('[InvoiceDetail] loaded invoice:', inv);
        this.invoice = inv;
        this.loading = false;
      },
      error: (err) => {
        console.error('[InvoiceDetail] API error:', err);
        this.loading = false;
        this.error   = true;
        this.snack.open('Failed to load invoice', 'Close', { duration: 4000 });
      }
    });
  }

  get hasRiskScore(): boolean {
    const s = this.invoice?.riskScore;
    return s != null && s > 0;
  }

  get riskScore(): number {
    return this.invoice?.riskScore ?? 0;
  }

  get riskClass(): string {
    const s = this.invoice?.riskScore;
    if (s == null || s <= 0) return 'low';
    if (s >= 70) return 'high';
    if (s >= 40) return 'medium';
    return 'low';
  }

  get riskIcon(): string {
    const s = this.invoice?.riskScore;
    if (s == null || s <= 0) return 'check_circle';
    if (s >= 70) return 'warning';
    if (s >= 40) return 'info';
    return 'check_circle';
  }

  get riskLabel(): string {
    if (!this.invoice) return 'LOW';
    if (this.invoice.riskLevel) return this.invoice.riskLevel;
    const s = this.invoice.riskScore ?? 0;
    if (s >= 70) return 'HIGH';
    if (s >= 40) return 'MEDIUM';
    return 'LOW';
  }

  get riskBarColor(): 'warn' | 'primary' {
    return this.riskScore >= 70 ? 'warn' : 'primary';
  }
}
