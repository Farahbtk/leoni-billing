import {
  environment
} from "./chunk-32VODOFB.js";
import {
  HttpClient
} from "./chunk-SWEXKP5I.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-II2NPOOE.js";

// src/app/core/services/client.service.ts
var ClientService = class _ClientService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/clients`;
  }
  getAll() {
    return this.http.get(this.url);
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  create(client) {
    return this.http.post(this.url, client);
  }
  update(id, client) {
    return this.http.put(`${this.url}/${id}`, client);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getDashboardKpis() {
    return this.http.get(`${environment.apiUrl}/dashboard/kpis`);
  }
  getMonthlyData() {
    return this.http.get(`${environment.apiUrl}/dashboard/monthly`);
  }
  static {
    this.\u0275fac = function ClientService_Factory(t) {
      return new (t || _ClientService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
  }
};

export {
  ClientService
};
//# sourceMappingURL=chunk-7ZLLAYBM.js.map
