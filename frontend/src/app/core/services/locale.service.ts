import { Injectable } from '@angular/core';

export type Lang     = 'en' | 'fr';
export type Currency = 'EUR' | 'USD' | 'GBP';

const T: Record<Lang, Record<string, string>> = {
  en: {
    dashboard:      'Dashboard',
    invoices:       'Invoices',
    clients:        'Clients',
    alerts:         'Alerts',
    mlAlerts:       'ML Risk Alerts',
    reports:        'Reports',
    settings:       'Settings',
    userManagement: 'User Management',
    administrator:  'Administrator',
    billingManager: 'Billing Manager',
  },
  fr: {
    dashboard:      'Tableau de bord',
    invoices:       'Factures',
    clients:        'Clients',
    alerts:         'Alertes',
    mlAlerts:       'ML Risk Alerts',
    reports:        'Rapports',
    settings:       'Paramètres',
    userManagement: 'Gestion utilisateurs',
    administrator:  'Administrateur',
    billingManager: 'Responsable facturation',
  },
};

@Injectable({ providedIn: 'root' })
export class LocaleService {

  get lang(): Lang {
    try {
      const v = localStorage.getItem('leoni_lang') as Lang;
      return (v === 'en' || v === 'fr') ? v : 'en';
    } catch {
      return 'en';
    }
  }

  get currency(): Currency {
    try {
      const v = localStorage.getItem('leoni_currency') as Currency;
      return (v === 'EUR' || v === 'USD' || v === 'GBP') ? v : 'EUR';
    } catch {
      return 'EUR';
    }
  }

  setLang(lang: Lang): void {
    try { localStorage.setItem('leoni_lang', lang); } catch {}
  }

  setCurrency(currency: Currency): void {
    try { localStorage.setItem('leoni_currency', currency); } catch {}
  }

  t(key: string): string {
    return (T[this.lang] ?? T.en)[key] ?? key;
  }
}
