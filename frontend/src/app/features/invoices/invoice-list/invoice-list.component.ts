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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InvoiceService } from '../../../core/services/invoice.service';
import { Invoice, InvoiceStatus } from '../../../models/invoice.model';
import { InvoiceFormDialogComponent } from '../invoice-form-dialog/invoice-form-dialog.component';
import { InvoiceDeleteDialogComponent } from '../invoice-delete-dialog/invoice-delete-dialog.component';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, CurrencyPipe, DatePipe,
    MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatCheckboxModule,
    MatMenuModule, MatSnackBarModule, MatProgressSpinnerModule, MatTooltipModule,
    MatDividerModule, MatDialogModule
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

  filterForm: FormGroup;
  statusOptions: InvoiceStatus[] = ['PAID', 'OVERDUE', 'PENDING'];

  constructor(
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.filterForm = this.fb.group({
      search:   [''],
      status:   [''],
      riskLevel:[''],
      dateFrom: [''],
      dateTo:   ['']
    });
  }

  ngOnInit(): void {
    this.loadInvoices();
    this.filterForm.get('search')!.valueChanges
      .pipe(debounceTime(350), distinctUntilChanged())
      .subscribe(() => this.loadInvoices());

    this.filterForm.get('status')!.valueChanges.subscribe(() => this.loadInvoices());
    this.filterForm.get('riskLevel')!.valueChanges.subscribe(() => this.loadInvoices());
    this.filterForm.get('dateFrom')!.valueChanges.subscribe(() => this.loadInvoices());
    this.filterForm.get('dateTo')!.valueChanges.subscribe(() => this.loadInvoices());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }

  loadInvoices(): void {
    this.loading = true;
    const f = this.filterForm.value;
    this.invoiceService.getAll({
      search:    f.search,
      status:    f.status    || undefined,
      riskLevel: f.riskLevel || undefined,
      dateFrom:  f.dateFrom,
      dateTo:    f.dateTo,
      page: 0, size: 50
    }).subscribe({
      next: (res) => {
        this.dataSource.data = res.content;
        this.totalElements   = res.totalElements;
        this.loading = false;
      },
      error: (err) => {
        this.dataSource.data = [];
        this.totalElements   = 0;
        this.loading = false;
        const msg = err.status === 401 || err.status === 403
          ? 'Session expired — please log in again'
          : 'Failed to load invoices — check backend connection';
        this.snack.open(msg, 'Close', { duration: 5000 });
      }
    });
  }

  openNewInvoice(): void {
    const ref = this.dialog.open(InvoiceFormDialogComponent, {
      data: {},
      width: '560px',
      disableClose: true
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.loadInvoices();
        this.snack.open('Invoice created successfully', 'OK', { duration: 3000 });
      }
    });
  }

  openEditInvoice(invoice: Invoice): void {
    const ref = this.dialog.open(InvoiceFormDialogComponent, {
      data: { invoice },
      width: '560px',
      disableClose: true
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.loadInvoices();
        this.snack.open('Invoice updated successfully', 'OK', { duration: 3000 });
      }
    });
  }

  deleteInvoice(invoice: Invoice): void {
    const ref = this.dialog.open(InvoiceDeleteDialogComponent, {
      data: { invoiceNumber: invoice.invoiceNumber },
      width: '420px'
    });
    ref.afterClosed().subscribe(confirmed => {
      if (!confirmed) return;
      this.invoiceService.delete(invoice.id).subscribe({
        next:  () => {
          this.loadInvoices();
          this.snack.open('Invoice deleted', 'OK', { duration: 3000 });
        },
        error: () => this.snack.open('Delete failed — check backend connection', 'Close', { duration: 4000 })
      });
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
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(r => this.selection.select(r));
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
