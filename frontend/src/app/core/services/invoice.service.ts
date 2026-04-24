import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Invoice, InvoiceFilter, PagedResponse } from '../../models/invoice.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private url = `${environment.apiUrl}/invoices`;

  constructor(private http: HttpClient) {}

  getAll(filter: InvoiceFilter = {}): Observable<PagedResponse<Invoice>> {
    let params = new HttpParams();
    if (filter.clientId)   params = params.set('clientId',  filter.clientId.toString());
    if (filter.status)     params = params.set('status',    filter.status);
    if (filter.riskLevel)  params = params.set('riskLevel', filter.riskLevel);
    if (filter.dateFrom)   params = params.set('dateFrom',  filter.dateFrom);
    if (filter.dateTo)     params = params.set('dateTo',    filter.dateTo);
    if (filter.search)     params = params.set('search',    filter.search);
    params = params.set('page', (filter.page ?? 0).toString());
    params = params.set('size', (filter.size ?? 20).toString());
    return this.http.get<PagedResponse<Invoice>>(this.url, { params });
  }

  getById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.url}/${id}`);
  }

  create(invoice: Partial<Invoice>): Observable<Invoice> {
    return this.http.post<Invoice>(this.url, invoice);
  }

  update(id: number, invoice: Partial<Invoice>): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.url}/${id}`, invoice);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  runPrediction(invoiceIds: number[]): Observable<Invoice[]> {
    return this.http.post<Invoice[]>(`${environment.apiUrl}/predictions/run`, { invoiceIds });
  }

  runPredictionAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${environment.apiUrl}/predictions/run`);
  }

  getOverdue(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.url}/overdue`);
  }

  getHighRisk(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.url}/high-risk`);
  }
}
