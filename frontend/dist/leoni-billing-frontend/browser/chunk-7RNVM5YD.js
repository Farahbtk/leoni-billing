import {
  ɵɵdefineInjectable
} from "./chunk-UIKDKAPR.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this._mode = "light";
    const saved = localStorage.getItem("leoni_theme");
    this._mode = saved === "light" || saved === "dark" || saved === "system" ? saved : "light";
    this.applyTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (this._mode === "system")
        this.applyTheme();
    });
  }
  setMode(mode) {
    this._mode = mode;
    localStorage.setItem("leoni_theme", mode);
    this.applyTheme();
  }
  toggle() {
    this.setMode(this.isDark ? "light" : "dark");
  }
  get mode() {
    return this._mode;
  }
  get isDark() {
    if (this._mode === "dark")
      return true;
    if (this._mode === "light")
      return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme() {
    document.body.classList.toggle("dark-mode", this.isDark);
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-7RNVM5YD.js.map
