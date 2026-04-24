export type UserRole = 'ADMIN' | 'BILLING_MANAGER';
export type UserStatus = 'ACTIVE' | 'INACTIVE';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface JwtResponse {
  token: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

export interface ManagedUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: UserStatus;
  department: string;
  createdAt: string;
}
