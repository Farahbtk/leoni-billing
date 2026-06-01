import {
  Component, OnInit, OnDestroy, AfterViewChecked,
  ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientService } from '../../core/services/client.service';
import { LocaleService } from '../../core/services/locale.service';
import { DashboardKpi, MonthlyData } from '../../models/client.model';

Chart.register(...registerables);

type KpiStatus = 'on-track' | 'at-risk' | 'off-track';

interface KpiRow {
  metric: string;
  actual: string;
  target: string;
  status: KpiStatus;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatButtonModule, MatIconModule, MatTableModule,
    MatSelectModule, MatDividerModule, MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('dsoChart') dsoChartRef!: ElementRef<HTMLCanvasElement>;

  loading = true;
  error   = false;

  selectedPeriod = 'Q1-2025';
  periods = ['Q1-2025', 'Q4-2024', 'Q3-2024', 'Q2-2024', 'Q1-2024'];

  kpiColumns = ['metric', 'actual', 'target', 'status'];
  kpiRows: KpiRow[]    = [];
  monthly: MonthlyData[] = [];

  private rawKpi: DashboardKpi | null = null;
  private chartInstance: Chart | null = null;
  private chartReady    = false;

  constructor(
    private clientService: ClientService,
    public  locale: LocaleService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    forkJoin({
      kpi:     this.clientService.getDashboardKpis(),
      monthly: this.clientService.getMonthlyData(),
    }).subscribe({
      next: ({ kpi, monthly }) => {
        this.rawKpi  = kpi;
        this.kpiRows = this.buildKpiRows(kpi);
        this.monthly = monthly.slice(-6);
        this.loading = false;
        this.chartReady = true;
      },
      error: () => {
        this.loading = false;
        this.error   = true;
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.chartReady && this.dsoChartRef?.nativeElement && !this.chartInstance) {
      this.chartReady = false;
      this.buildChart();
    }
  }

  ngOnDestroy(): void {
    this.chartInstance?.destroy();
  }

  // ── KPI table ──────────────────────────────────────────────────────────────

  private buildKpiRows(kpi: DashboardKpi): KpiRow[] {
    const cur = this.locale.currency;
    const fmt = (v: number) =>
      new Intl.NumberFormat('de-DE', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(v);

    // Static targets keep EUR reference values for comparison logic
    const targetFmt = (v: number) =>
      new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);

    const dso     = Number(kpi.averageDso);
    const rate    = Number(kpi.collectionRate);
    const revenue = Number(kpi.totalRevenue);
    const ovdAmt  = Number(kpi.overdueAmount);
    const ovdCnt  = Number(kpi.overdueInvoices);
    const hiRisk  = Number(kpi.highRiskCount);

    return [
      {
        metric: 'Days Sales Outstanding (DSO)',
        actual: `${dso.toFixed(0)} days`,
        target: '39 days',
        status: dso <= 39 ? 'on-track' : dso <= 50 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'Collection Rate',
        actual: `${rate.toFixed(1)}%`,
        target: '90%',
        status: rate >= 90 ? 'on-track' : rate >= 80 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'Total Invoiced',
        actual: fmt(revenue),
        target: targetFmt(4_500_000),
        status: revenue >= 4_500_000 ? 'on-track' : revenue >= 3_500_000 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'Overdue Amount',
        actual: fmt(ovdAmt),
        target: `< ${targetFmt(300_000)}`,
        status: ovdAmt < 300_000 ? 'on-track' : ovdAmt < 500_000 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'Overdue Invoice Count',
        actual: String(ovdCnt),
        target: '< 15',
        status: ovdCnt < 15 ? 'on-track' : ovdCnt < 25 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'High Risk Invoices',
        actual: String(hiRisk),
        target: '< 5',
        status: hiRisk < 5 ? 'on-track' : hiRisk < 10 ? 'at-risk' : 'off-track',
      },
    ];
  }

  statusIcon(s: KpiStatus): string {
    return s === 'on-track' ? 'check_circle' : s === 'at-risk' ? 'info' : 'cancel';
  }

  statusLabel(s: KpiStatus): string {
    return s === 'on-track' ? 'On-track' : s === 'at-risk' ? 'At-risk' : 'Off-track';
  }

  // ── Excel export (no external library) ────────────────────────────────────

  exportExcel(): void {
    const bgOf = (s: KpiStatus) =>
      s === 'on-track' ? '#d1fae5' : s === 'at-risk' ? '#fef3c7' : '#fee2e2';

    const bodyRows = this.kpiRows.map(r => `
      <tr>
        <td>${r.metric}</td>
        <td style="font-weight:600">${r.actual}</td>
        <td>${r.target}</td>
        <td style="background:${bgOf(r.status)};font-weight:600">${this.statusLabel(r.status)}</td>
      </tr>`).join('');

    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="UTF-8">
        <!--[if gte mso 9]><xml>
          <x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
            <x:Name>KPI Summary</x:Name>
          </x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>
        </xml><![endif]-->
        <style>
          body { font-family: Calibri, Arial, sans-serif; }
          h2   { color: #3d52a0; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #cbd5e1; padding: 8px 12px; }
          th { background: #3d52a0; color: #fff; font-weight: 700; }
          tr:nth-child(even) td { background: #f8fafc; }
        </style>
      </head>
      <body>
        <h2>LEONI — Financial Reports (${this.selectedPeriod})</h2>
        <p style="color:#64748b;font-size:12px">
          Generated: ${new Date().toLocaleDateString()} &nbsp;|&nbsp; Currency: ${this.locale.currency}
        </p>
        <table>
          <thead>
            <tr>
              <th>Metric</th><th>Actual</th><th>Target</th><th>Status</th>
            </tr>
          </thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </body>
    </html>`;

    const blob = new Blob(['﻿', html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    this.triggerDownload(blob, 'LEONI_Financial_Report.xls');
  }

  // ── PDF export (popup print window) ───────────────────────────────────────

  exportPdf(): void {
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) {
      this.snack.open('Allow pop-ups for this site to export PDF', 'Close', { duration: 4000 });
      return;
    }

    const bgOf    = (s: KpiStatus) =>
      s === 'on-track' ? '#d1fae5' : s === 'at-risk' ? '#fef3c7' : '#fee2e2';
    const colorOf = (s: KpiStatus) =>
      s === 'on-track' ? '#065f46' : s === 'at-risk' ? '#92400e' : '#991b1b';

    const bodyRows = this.kpiRows.map(r => `
      <tr>
        <td>${r.metric}</td>
        <td style="font-weight:600">${r.actual}</td>
        <td style="color:#64748b">${r.target}</td>
        <td>
          <span style="display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;
            font-weight:700;background:${bgOf(r.status)};color:${colorOf(r.status)}">
            ${this.statusLabel(r.status)}
          </span>
        </td>
      </tr>`).join('');

    win.document.write(`<!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>LEONI Financial Report</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 32px 40px; color: #1e293b; font-size: 13px; }
          .header { border-bottom: 3px solid #3d52a0; padding-bottom: 14px; margin-bottom: 22px; }
          .header h1 { font-size: 20px; color: #3d52a0; margin-bottom: 4px; }
          .header p  { font-size: 11px; color: #64748b; }
          h3 { font-size: 13px; margin-bottom: 10px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; }
          table { width: 100%; border-collapse: collapse; }
          th { background: #3d52a0; color: #fff; padding: 9px 12px; text-align: left; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.4px; }
          td { padding: 9px 12px; border-bottom: 1px solid #e2e8f0; }
          tr:nth-child(even) td { background: #f8fafc; }
          .footer { margin-top: 20px; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; }
          @media print { @page { margin: 15mm 20mm; size: A4; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>LEONI — Financial Reports</h1>
          <p>Period: <strong>${this.selectedPeriod}</strong> &nbsp;·&nbsp;
             Generated: ${new Date().toLocaleDateString()} &nbsp;·&nbsp;
             Currency: ${this.locale.currency}</p>
        </div>
        <h3>KPI Summary</h3>
        <table>
          <thead>
            <tr><th>Metric</th><th>Actual</th><th>Target</th><th>Status</th></tr>
          </thead>
          <tbody>${bodyRows}</tbody>
        </table>
        <div class="footer">LEONI Billing System &nbsp;·&nbsp; Confidential — Internal Use Only</div>
        <script>
          window.addEventListener('load', function() {
            setTimeout(function() { window.print(); }, 350);
          });
        </script>
      </body>
      </html>`);
    win.document.close();
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ── Chart ──────────────────────────────────────────────────────────────────

  private monthLabel(m: string): string {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const iso = m.match(/\d{4}-(\d{2})/);
    if (iso) return months[parseInt(iso[1]) - 1] ?? m;
    return m.slice(0, 3);
  }

  private buildChart(): void {
    const canvas = this.dsoChartRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const valid = this.monthly.filter(m => {
      const inv = Number(m.invoiced);
      const col = Number(m.collected);
      return inv > 0 && (inv - col) > 0;
    });

    const labels    = valid.map(m => this.monthLabel(m.month));
    const dsoActual = valid.map(m => {
      const inv = Number(m.invoiced);
      const col = Number(m.collected);
      return Math.round(((inv - col) / inv) * 30);
    });
    const dsoTarget = valid.map(() => 39);

    this.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'DSO (days)',
            data: dsoActual,
            borderColor: '#3d52a0',
            backgroundColor: 'rgba(61,82,160,0.08)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3d52a0',
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: 'Target (39d)',
            data: dsoTarget,
            borderColor: '#10b981',
            borderDash: [6, 4],
            backgroundColor: 'transparent',
            tension: 0,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { family: 'Inter, sans-serif', size: 12 }, usePointStyle: true, padding: 16 },
          },
          tooltip: {
            callbacks: { label: c => `${c.dataset.label}: ${c.parsed.y}d` },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Inter, sans-serif', size: 12 } },
          },
          y: {
            grid: { color: 'rgba(0,0,0,0.04)' },
            ticks: {
              font: { family: 'Inter, sans-serif', size: 12 },
              callback: (v: string | number) => v + 'd',
            },
            suggestedMin: 0,
            suggestedMax: 60,
          },
        },
      },
    });
  }
}
