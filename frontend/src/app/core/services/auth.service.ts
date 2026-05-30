import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JwtResponse, LoginRequest, User } from '../../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'leoni_token';
  private readonly USER_KEY  = 'leoni_user';

  private currentUserSubject = new BehaviorSubject<User | null>(this.loadUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${environment.apiUrl}/auth/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        const user: User = {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          role: res.role
        };
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = this.decodeToken(token);
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  isAdmin(): boolean {
    // Read role from JWT claim (authoritative) to handle stale localStorage sessions
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = this.decodeToken(token);
      return payload.role === 'ADMIN';
    } catch {
      return false;
    }
  }

  private decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getDisplayName(): string {
    const user = this.getCurrentUser();
    if (!user) return 'User';
    return `${user.firstName} ${user.lastName}`;
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, { email });
  }

  resetPassword(email: string, code: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/reset-password`, { email, code, newPassword });
  }

  private loadUser(): User | null {
    const raw = localStorage.getItem(this.USER_KEY);
    if (!raw) return null;
    try {
      const user: User = JSON.parse(raw);
      // Clear stale sessions that predate RBAC (missing role field)
      if (!user.role) {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        return null;
      }
      return user;
    } catch {
      return null;
    }
  }
}
