import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _mode: ThemeMode = 'light';

  constructor() {
    const saved = localStorage.getItem('leoni_theme') as ThemeMode;
    this._mode = (saved === 'light' || saved === 'dark' || saved === 'system') ? saved : 'light';
    this.applyTheme();
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => { if (this._mode === 'system') this.applyTheme(); });
  }

  setMode(mode: ThemeMode): void {
    this._mode = mode;
    localStorage.setItem('leoni_theme', mode);
    this.applyTheme();
  }

  toggle(): void {
    this.setMode(this.isDark ? 'light' : 'dark');
  }

  get mode(): ThemeMode { return this._mode; }

  get isDark(): boolean {
    if (this._mode === 'dark')   return true;
    if (this._mode === 'light')  return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-mode', this.isDark);
  }
}
