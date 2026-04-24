export type InvoiceStatus = 'PAID' | 'OVERDUE' | 'PENDING';
export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Invoice {
  id: number;
  invoiceNumber: string;
  clientId: number;
  clientName: string;
  amount: number;
  currency: string;
  issueDate: string;
  dueDate: string;
  paymentDate?: string;
  status: InvoiceStatus;
  riskScore?: number;
  riskLevel?: RiskLevel;
  daysOverdue?: number;
  paymentTerms: number;
  description?: string;
  shapExplanation?: ShapFactor[];
}

export interface ShapFactor {
  feature: string;
  value: number;
  impact: number;
}

export interface InvoiceFilter {
  clientId?: number;
  status?: InvoiceStatus;
  riskLevel?: RiskLevel;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  size?: number;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
