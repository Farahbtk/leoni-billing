import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { SelectionModel } from '@angular/cdk/collections';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice, InvoiceStatus } from '../../../models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, CurrencyPipe, DatePipe,
    MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatCheckboxModule,
    MatMenuModule, MatSnackBarModule, MatProgressSpinnerModule, MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)      sort!: MatSort;

  displayedColumns = ['select', 'invoiceNumber', 'clientName', 'amount', 'issueDate', 'dueDate', 'status', 'riskScore', 'actions'];
  dataSource = new MatTableDataSource<Invoice>([]);
  selection = new SelectionModel<Invoice>(true, []);
  totalElements = 0;
  loading = false;
  predicting = false;

  filterForm: FormGroup;
  statusOptions: InvoiceStatus[] = ['PAID', 'OVERDUE', 'PENDING'];

  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) {
    this.filterForm = this.fb.group({
      search: [''],
      status: [''],
      riskLevel: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }

  ngOnInit(): void {
    this.loadInvoices();
    this.filterForm.get('search')!.valueChanges
      .pipe(debounceTime(350), distinctUntilChanged())
      .subscribe(() => this.loadInvoices());

    this.filterForm.get('status')!.valueChanges.subscribe(() => this.loadInvoices());
    this.filterForm.get('riskLevel')!.valueChanges.subscribe(() => this.loadInvoices());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadInvoices(): void {
    this.loading = true;
    const f = this.filterForm.value;
    this.invoiceService.getAll({
      search: f.search, status: f.status || undefined,
      riskLevel: f.riskLevel || undefined,
      dateFrom: f.dateFrom, dateTo: f.dateTo, page: 0, size: 50
    }).subscribe({
      next: (res) => {
        this.dataSource.data = res.content;
        this.totalElements = res.totalElements;
        this.loading = false;
      },
      error: () => {
        this.dataSource.data = MOCK_INVOICES;
        this.totalElements = MOCK_INVOICES.length;
        this.loading = false;
      }
    });
  }

  runPrediction(): void {
    const ids = this.selection.selected.map(i => i.id);
    if (!ids.length) {
      this.snack.open('Select at least one invoice to run prediction', 'OK', { duration: 3000 });
      return;
    }
    this.predicting = true;
    this.invoiceService.runPrediction(ids).subscribe({
      next: (updated) => {
        updated.forEach(u => {
          const idx = this.dataSource.data.findIndex(i => i.id === u.id);
          if (idx >= 0) this.dataSource.data[idx] = u;
        });
        this.dataSource.data = [...this.dataSource.data];
        this.selection.clear();
        this.predicting = false;
        this.snack.open(`Prediction complete for ${ids.length} invoice(s)`, 'OK', { duration: 3000 });
      },
      error: () => {
        this.predicting = false;
        this.snack.open('Prediction service unavailable', 'Close', { duration: 4000 });
      }
    });
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.loadInvoices();
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllRows(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));
  }

  getRiskClass(score: number): string {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }

  getStatusClass(s: InvoiceStatus): string {
    return s.toLowerCase();
  }
}

const MOCK_INVOICES: Invoice[] = [
  { id: 1,  invoiceNumber: 'INV-2024-001', clientId: 1, clientName: 'BMW Group',           amount: 285000, currency: 'EUR', issueDate: '2024-01-10', dueDate: '2024-02-09', status: 'PAID',    riskScore: 12, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 2,  invoiceNumber: 'INV-2024-002', clientId: 2, clientName: 'Volkswagen AG',       amount: 420000, currency: 'EUR', issueDate: '2024-01-15', dueDate: '2024-02-14', status: 'OVERDUE', riskScore: 78, riskLevel: 'HIGH',   paymentTerms: 30, daysOverdue: 18 },
  { id: 3,  invoiceNumber: 'INV-2024-003', clientId: 3, clientName: 'Mercedes-Benz',       amount: 195000, currency: 'EUR', issueDate: '2024-01-20', dueDate: '2024-02-19', status: 'PENDING', riskScore: 45, riskLevel: 'MEDIUM', paymentTerms: 30 },
  { id: 4,  invoiceNumber: 'INV-2024-004', clientId: 4, clientName: 'Stellantis',          amount: 312000, currency: 'EUR', issueDate: '2024-01-22', dueDate: '2024-02-21', status: 'PAID',    riskScore: 22, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 5,  invoiceNumber: 'INV-2024-005', clientId: 2, clientName: 'Volkswagen AG',       amount: 540000, currency: 'EUR', issueDate: '2024-01-25', dueDate: '2024-02-24', status: 'OVERDUE', riskScore: 85, riskLevel: 'HIGH',   paymentTerms: 30, daysOverdue: 8 },
  { id: 6,  invoiceNumber: 'INV-2024-006', clientId: 5, clientName: 'Renault Group',       amount: 178000, currency: 'EUR', issueDate: '2024-01-28', dueDate: '2024-02-27', status: 'PENDING', riskScore: 31, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 7,  invoiceNumber: 'INV-2024-007', clientId: 6, clientName: 'Toyota Motor',        amount: 623000, currency: 'EUR', issueDate: '2024-01-30', dueDate: '2024-02-29', status: 'PAID',    riskScore: 8,  riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 8,  invoiceNumber: 'INV-2024-008', clientId: 7, clientName: 'Ford Motor Company',  amount: 291000, currency: 'EUR', issueDate: '2024-02-01', dueDate: '2024-03-02', status: 'OVERDUE', riskScore: 72, riskLevel: 'HIGH',   paymentTerms: 30, daysOverdue: 5 },
  { id: 9,  invoiceNumber: 'INV-2024-009', clientId: 1, clientName: 'BMW Group',           amount: 415000, currency: 'EUR', issueDate: '2024-02-05', dueDate: '2024-03-06', status: 'PENDING', riskScore: 18, riskLevel: 'LOW',    paymentTerms: 30 },
  { id: 10, invoiceNumber: 'INV-2024-010', clientId: 3, clientName: 'Mercedes-Benz',       amount: 368000, currency: 'EUR', issueDate: '2024-02-08', dueDate: '2024-03-09', status: 'PAID',    riskScore: 15, riskLevel: 'LOW',    paymentTerms: 30 }
];
