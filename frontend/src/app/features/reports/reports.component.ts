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
import { ClientService } from '../../core/services/client.service';
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
    MatSelectModule, MatDividerModule, MatProgressSpinnerModule
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
  kpiRows: KpiRow[] = [];
  monthly: MonthlyData[] = [];

  private chartInstance: Chart | null = null;
  private chartReady = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    forkJoin({
      kpi:     this.clientService.getDashboardKpis(),
      monthly: this.clientService.getMonthlyData(),
    }).subscribe({
      next: ({ kpi, monthly }) => {
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
    const eur = (v: number) =>
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
        actual: eur(revenue),
        target: '€4,500,000',
        status: revenue >= 4_500_000 ? 'on-track' : revenue >= 3_500_000 ? 'at-risk' : 'off-track',
      },
      {
        metric: 'Overdue Amount',
        actual: eur(ovdAmt),
        target: '< €300,000',
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

    // Only keep months where outstanding > 0 (invoiced but not yet fully collected).
    // Months where collected >= invoiced produce DSO = 0 and are not meaningful;
    // months absent from the API result would create null gaps — both are excluded here.
    const valid = this.monthly.filter(m => {
      const inv = Number(m.invoiced);
      const col = Number(m.collected);
      return inv > 0 && (inv - col) > 0;
    });

    const labels    = valid.map(m => this.monthLabel(m.month));
    // DSO = (outstanding / invoiced) * 30  — standard 30-day period approximation
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
            callbacks: {
              label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}d`,
            },
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
