import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  department: string;
  jobTitle?: string;
  phone?: string;
  createdAt: string;
}

export interface HealthStatus {
  backend: string;
  database: string;
  mlService: string;
}

export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  lastLogin: string;
}

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private base = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.base}/me`);
  }

  updateProfile(data: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.base}/profile`, data);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put<any>(`${this.base}/change-password`, { currentPassword, newPassword });
  }

  getStats(): Observable<UserStats> {
    return this.http.get<UserStats>(`${this.base}/stats`);
  }

  getHealth(): Observable<HealthStatus> {
    return this.http.get<HealthStatus>(`${environment.apiUrl}/health`);
  }

  downloadCsv(type: 'invoices' | 'clients'): void {
    this.http.get(`${environment.apiUrl}/${type}/export`, { responseType: 'blob' })
      .subscribe(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${type}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
  }
}
