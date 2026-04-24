import {
  Router
} from "./chunk-YSSCNL4Y.js";
import {
  environment
} from "./chunk-32VODOFB.js";
import {
  HttpClient
} from "./chunk-SWEXKP5I.js";
import {
  BehaviorSubject,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-II2NPOOE.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.TOKEN_KEY = "leoni_token";
    this.USER_KEY = "leoni_user";
    this.currentUserSubject = new BehaviorSubject(this.loadUser());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  login(credentials) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(tap((res) => {
      localStorage.setItem(this.TOKEN_KEY, res.token);
      const user = {
        id: res.id,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        role: res.role
      };
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.currentUserSubject.next(user);
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = this.decodeToken(token);
      return payload.exp * 1e3 > Date.now();
    } catch {
      return false;
    }
  }
  isAdmin() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = this.decodeToken(token);
      return payload.role === "ADMIN";
    } catch {
      return false;
    }
  }
  decodeToken(token) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getDisplayName() {
    const user = this.getCurrentUser();
    if (!user)
      return "User";
    return `${user.firstName} ${user.lastName}`;
  }
  loadUser() {
    const raw = localStorage.getItem(this.USER_KEY);
    if (!raw)
      return null;
    try {
      const user = JSON.parse(raw);
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
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-VI4JGZMU.js.map
