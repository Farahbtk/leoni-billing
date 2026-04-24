import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartConfiguration } from 'chart.js';

interface KpiRow { metric: string; value: string; target: string; status: 'on-track' | 'at-risk' | 'off-track'; }

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule, NgChartsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  selectedPeriod = 'Q1-2024';

  kpiColumns = ['metric', 'value', 'target', 'status'];
  kpiData: KpiRow[] = [
    { metric: 'Days Sales Outstanding (DSO)',  value: '42 days',    target: '39 days',   status: 'at-risk'   },
    { metric: 'Collection Rate',               value: '87.3%',      target: '90%',       status: 'at-risk'   },
    { metric: 'Total Invoiced',                value: '€4,750,000', target: '€4,500,000',status: 'on-track'  },
    { metric: 'Overdue Amount',                value: '€420,000',   target: '< €300,000',status: 'off-track' },
    { metric: 'Overdue Invoice Count',         value: '23',         target: '< 15',      status: 'off-track' },
    { metric: 'Avg Days to Pay (Actual)',      value: '38 days',    target: '30 days',   status: 'at-risk'   },
    { metric: 'High Risk Invoices',            value: '9',          target: '< 5',       status: 'off-track' },
    { metric: 'On-Time Payment Rate',          value: '82%',        target: '88%',       status: 'at-risk'   }
  ];

  lineChartData: ChartData<'line'> = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'DSO (days)', data: [38, 40, 45, 41, 44, 42], borderColor: '#3d52a0', backgroundColor: 'rgba(61,82,160,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#3d52a0' },
      { label: 'Target',     data: [39, 39, 39, 39, 39, 39], borderColor: '#10b981', borderDash: [6, 3], backgroundColor: 'transparent', tension: 0, pointRadius: 0 }
    ]
  };

  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } },
      y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { family: 'Inter' }, callback: (v) => v + 'd' } }
    }
  };
}
