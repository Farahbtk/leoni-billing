import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ClientService } from '../../core/services/client.service';
import { InvoiceService } from '../../core/services/invoice.service';
import { DashboardKpi, MonthlyData } from '../../models/client.model';
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterModule, CurrencyPipe, DatePipe, DecimalPipe,
    MatCardModule, MatIconModule, MatButtonModule,
    MatChipsModule, MatProgressBarModule, NgChartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  today = new Date();
  kpis: DashboardKpi = {
    totalInvoices: 0, totalRevenue: 0, overdueInvoices: 0,
    overdueAmount: 0, averageDso: 0, collectionRate: 0,
    pendingAmount: 0, highRiskCount: 0
  };
  recentInvoices: Invoice[] = [];
  highRiskInvoices: Invoice[] = [];
  loading = true;

  /* ── Chart configurations ── */
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true, boxWidth: 8 } },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 11 } } },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: { font: { family: 'Inter', size: 11 }, callback: (v) => '€' + (Number(v) / 1000).toFixed(0) + 'k' }
      }
    }
  };

  barChartData: ChartData<'bar'> = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Invoiced', data: [820000, 950000, 710000, 880000, 1050000, 920000], backgroundColor: '#3d52a0', borderRadius: 6, barPercentage: 0.55 },
      { label: 'Collected', data: [740000, 860000, 680000, 800000, 940000, 850000], backgroundColor: '#10b981', borderRadius: 6, barPercentage: 0.55 }
    ]
  };

  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Paid', 'Overdue', 'Pending'],
    datasets: [{
      data: [205, 23, 20],
      backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
      borderWidth: 0,
      hoverOffset: 8
    }]
  };

  doughnutOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: { position: 'right', labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true, padding: 16 } }
    }
  };

  constructor(private clientService: ClientService, private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadKpis();
    this.loadRecentInvoices();
    this.loadHighRiskInvoices();
  }

  private loadKpis(): void {
    this.clientService.getDashboardKpis().subscribe({
      next: (data) => { this.kpis = data; this.loading = false; },
      error: () => {
        this.kpis = {
          totalInvoices: 248, totalRevenue: 4_750_000, overdueInvoices: 23,
          overdueAmount: 420_000, averageDso: 42, collectionRate: 87.3,
          pendingAmount: 1_200_000, highRiskCount: 9
        };
        this.loading = false;
      }
    });
  }

  private loadRecentInvoices(): void {
    this.invoiceService.getAll({ page: 0, size: 5 }).subscribe({
      next: (res) => this.recentInvoices = res.content,
      error: () => { this.recentInvoices = MOCK_INVOICES; }
    });
  }

  private loadHighRiskInvoices(): void {
    this.invoiceService.getHighRisk().subscribe({
      next: (data) => this.highRiskInvoices = data.slice(0, 4),
      error: () => { this.highRiskInvoices = MOCK_INVOICES.filter(i => i.riskLevel === 'HIGH'); }
    });
  }

  getRiskClass(score: number): string {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }
}

const MOCK_INVOICES: Invoice[] = [
  { id: 1, invoiceNumber: 'INV-2024-001', clientId: 1, clientName: 'BMW Group',       amount: 285000, currency: 'EUR', issueDate: '2024-01-10', dueDate: '2024-02-09', status: 'PAID',    riskScore: 12, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 2, invoiceNumber: 'INV-2024-002', clientId: 2, clientName: 'Volkswagen AG',   amount: 420000, currency: 'EUR', issueDate: '2024-01-15', dueDate: '2024-02-14', status: 'OVERDUE', riskScore: 78, riskLevel: 'HIGH',   paymentTerms: 30, daysOverdue: 18 },
  { id: 3, invoiceNumber: 'INV-2024-003', clientId: 3, clientName: 'Mercedes-Benz',   amount: 195000, currency: 'EUR', issueDate: '2024-01-20', dueDate: '2024-02-19', status: 'PENDING', riskScore: 45, riskLevel: 'MEDIUM', paymentTerms: 30 },
  { id: 4, invoiceNumber: 'INV-2024-004', clientId: 4, clientName: 'Stellantis',      amount: 312000, currency: 'EUR', issueDate: '2024-01-22', dueDate: '2024-02-21', status: 'PAID',    riskScore: 22, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 5, invoiceNumber: 'INV-2024-005', clientId: 2, clientName: 'Volkswagen AG',   amount: 540000, currency: 'EUR', issueDate: '2024-01-25', dueDate: '2024-02-24', status: 'OVERDUE', riskScore: 85, riskLevel: 'HIGH',   paymentTerms: 30, daysOverdue: 8 }
];
