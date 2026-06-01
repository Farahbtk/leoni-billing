import {
  ɵɵdefineInjectable
} from "./chunk-427CRICV.js";

// src/app/core/services/locale.service.ts
var T = {
  en: {
    dashboard: "Dashboard",
    invoices: "Invoices",
    clients: "Clients",
    alerts: "Alerts",
    reports: "Reports",
    settings: "Settings",
    userManagement: "User Management",
    administrator: "Administrator",
    billingManager: "Billing Manager"
  },
  fr: {
    dashboard: "Tableau de bord",
    invoices: "Factures",
    clients: "Clients",
    alerts: "Alertes",
    reports: "Rapports",
    settings: "Param\xE8tres",
    userManagement: "Gestion utilisateurs",
    administrator: "Administrateur",
    billingManager: "Responsable facturation"
  }
};
var LocaleService = class _LocaleService {
  get lang() {
    try {
      const v = localStorage.getItem("leoni_lang");
      return v === "en" || v === "fr" ? v : "en";
    } catch {
      return "en";
    }
  }
  get currency() {
    try {
      const v = localStorage.getItem("leoni_currency");
      return v === "EUR" || v === "USD" || v === "GBP" ? v : "EUR";
    } catch {
      return "EUR";
    }
  }
  setLang(lang) {
    try {
      localStorage.setItem("leoni_lang", lang);
    } catch {
    }
  }
  setCurrency(currency) {
    try {
      localStorage.setItem("leoni_currency", currency);
    } catch {
    }
  }
  t(key) {
    return (T[this.lang] ?? T.en)[key] ?? key;
  }
  static {
    this.\u0275fac = function LocaleService_Factory(t) {
      return new (t || _LocaleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocaleService, factory: _LocaleService.\u0275fac, providedIn: "root" });
  }
};

export {
  LocaleService
};
//# sourceMappingURL=chunk-MTNULHT6.js.map
