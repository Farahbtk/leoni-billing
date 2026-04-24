import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ManagedUser } from '../../models/auth.model';

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department: string;
}

export interface UpdateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private url = `${environment.apiUrl}/admin/users`;

  constructor(private http: HttpClient) {}

  getManagers(): Observable<ManagedUser[]> {
    return this.http.get<ManagedUser[]>(this.url);
  }

  createManager(payload: CreateUserPayload): Observable<ManagedUser> {
    return this.http.post<ManagedUser>(this.url, payload);
  }

  updateManager(id: number, payload: UpdateUserPayload): Observable<ManagedUser> {
    return this.http.put<ManagedUser>(`${this.url}/${id}`, payload);
  }

  toggleStatus(id: number): Observable<ManagedUser> {
    return this.http.put<ManagedUser>(`${this.url}/${id}/status`, {});
  }

  deleteManager(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
