import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartConfiguration } from 'chart.js';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice, ShapFactor } from '../../../models/invoice.model';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [
    CommonModule, RouterModule, CurrencyPipe, DatePipe,
    MatCardModule, MatButtonModule, MatIconModule,
    MatDividerModule, MatProgressBarModule, MatChipsModule,
    MatSnackBarModule, NgChartsModule
  ],
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  invoice!: Invoice;
  loading = true;
  predicting = false;

  shapChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  shapChartOptions: ChartConfiguration['options'] = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => ` Impact: ${(c.raw as number) > 0 ? '+' : ''}${c.raw}` } } },
    scales: {
      x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { family: 'Inter', size: 11 } } },
      y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 11 } } }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.invoiceService.getById(id).subscribe({
      next: (inv) => { this.invoice = inv; this.buildShapChart(); this.loading = false; },
      error: () => {
        this.invoice = MOCK_INVOICE_DETAIL;
        this.buildShapChart();
        this.loading = false;
      }
    });
  }

  runPrediction(): void {
    this.predicting = true;
    this.invoiceService.runPrediction([this.invoice.id]).subscribe({
      next: (updated) => {
        this.invoice = { ...this.invoice, ...updated[0] };
        this.buildShapChart();
        this.predicting = false;
        this.snack.open('Prediction updated successfully', 'OK', { duration: 3000 });
      },
      error: () => {
        this.predicting = false;
        this.snack.open('Prediction service unavailable', 'Close', { duration: 4000 });
      }
    });
  }

  private buildShapChart(): void {
    const factors: ShapFactor[] = this.invoice.shapExplanation ?? MOCK_SHAP;
    const sorted = [...factors].sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact)).slice(0, 8);
    this.shapChartData = {
      labels: sorted.map(f => f.feature),
      datasets: [{
        data: sorted.map(f => f.impact),
        backgroundColor: sorted.map(f => f.impact > 0 ? 'rgba(239,68,68,0.75)' : 'rgba(16,185,129,0.75)'),
        borderRadius: 4
      }]
    };
  }

  getRiskClass(score: number): string {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }
}

const MOCK_SHAP: ShapFactor[] = [
  { feature: 'Days since last late payment', value: 45,  impact:  0.28 },
  { feature: 'Invoice amount (EUR)',          value: 420000, impact: 0.22 },
  { feature: 'Client payment history score', value: 62,  impact: -0.18 },
  { feature: 'Days to due date',              value: 8,   impact:  0.15 },
  { feature: 'Overdue count last 12 months', value: 3,   impact:  0.12 },
  { feature: 'Client credit utilization',    value: 0.71, impact: 0.09 },
  { feature: 'Payment terms (days)',          value: 30,  impact: -0.06 },
  { feature: 'Seasonality factor',           value: 0.8, impact:  0.04 }
];

const MOCK_INVOICE_DETAIL: Invoice = {
  id: 2, invoiceNumber: 'INV-2024-002', clientId: 2, clientName: 'Volkswagen AG',
  amount: 420000, currency: 'EUR', issueDate: '2024-01-15', dueDate: '2024-02-14',
  status: 'OVERDUE', riskScore: 78, riskLevel: 'HIGH', paymentTerms: 30, daysOverdue: 18,
  description: 'Wire harness systems — Q1 2024 delivery batch',
  shapExplanation: MOCK_SHAP
};
