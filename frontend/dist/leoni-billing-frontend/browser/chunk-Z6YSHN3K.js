import {
  environment
} from "./chunk-WJ3XFFVQ.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-IT5HHABJ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5P2RJQ5K.js";

// src/app/core/services/invoice.service.ts
var InvoiceService = class _InvoiceService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/invoices`;
  }
  getAll(filter = {}) {
    let params = new HttpParams();
    if (filter.clientId)
      params = params.set("clientId", filter.clientId.toString());
    if (filter.status)
      params = params.set("status", filter.status);
    if (filter.riskLevel)
      params = params.set("riskLevel", filter.riskLevel);
    if (filter.dateFrom)
      params = params.set("dateFrom", filter.dateFrom);
    if (filter.dateTo)
      params = params.set("dateTo", filter.dateTo);
    if (filter.search)
      params = params.set("search", filter.search);
    params = params.set("page", (filter.page ?? 0).toString());
    params = params.set("size", (filter.size ?? 20).toString());
    return this.http.get(this.url, { params });
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  create(invoice) {
    return this.http.post(this.url, invoice);
  }
  update(id, invoice) {
    return this.http.put(`${this.url}/${id}`, invoice);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  runPrediction(invoiceIds) {
    return this.http.post(`${environment.apiUrl}/predictions/run`, { invoiceIds });
  }
  runPredictionAll() {
    return this.http.get(`${environment.apiUrl}/predictions/run`);
  }
  getOverdue() {
    return this.http.get(`${this.url}/overdue`);
  }
  getHighRisk() {
    return this.http.get(`${this.url}/high-risk`);
  }
  static {
    this.\u0275fac = function InvoiceService_Factory(t) {
      return new (t || _InvoiceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvoiceService, factory: _InvoiceService.\u0275fac, providedIn: "root" });
  }
};

export {
  InvoiceService
};
//# sourceMappingURL=chunk-Z6YSHN3K.js.map
