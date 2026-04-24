export type RiskProfile = 'LOW' | 'MEDIUM' | 'HIGH';
export type ClientStatus = 'ACTIVE' | 'INACTIVE';
export type CollaborationState = 'ONGOING' | 'SUSPENDED' | 'TERMINATED';

export interface Client {
  id: number;
  name: string;
  code: string;
  country: string;
  industry?: string;
  status: ClientStatus;
  collaborationSince: string;
  collaborationState: CollaborationState;
  contactEmail?: string;
  contactPhone?: string;
  creditLimit?: number;
  paymentTermsDays?: number;
  riskProfile?: RiskProfile;
  averageDso?: number;
  totalOutstanding?: number;
  totalPaid?: number;
  invoiceCount?: number;
  overdueCount?: number;
  lastPaymentDate?: string;
}

export interface DashboardKpi {
  totalInvoices: number;
  totalRevenue: number;
  overdueInvoices: number;
  overdueAmount: number;
  averageDso: number;
  collectionRate: number;
  pendingAmount: number;
  highRiskCount: number;
}

export interface MonthlyData {
  month: string;
  invoiced: number;
  collected: number;
}
