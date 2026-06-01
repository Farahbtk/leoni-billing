import {
  DomSanitizer
} from "./chunk-FUMIJFC4.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-AQDHREHX.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-427CRICV.js";

// src/app/safe-url.pipe.ts
var SafeUrlPipe = class _SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function SafeUrlPipe_Factory(t) {
      return new (t || _SafeUrlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeUrl", type: _SafeUrlPipe, pure: true, standalone: true });
  }
};

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function DashboardComponent_button_2_Template_button_click_0_listener() {
      const page_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPage(page_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r2 === ctx_r2.selectedPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r2.label, " ");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.reportId = "3304e379-992a-4a54-be9c-32447b293e63";
    this.ctid = "b7bd4715-4217-48c7-919e-2ea97f592fa7";
    this.pages = [
      { label: "Vue G\xE9n\xE9rale", name: "783952a9448b7b3fd654" },
      { label: "Analyse Retards", name: "7349d1d752afd0d7f5da" },
      { label: "Customer Risk", name: "ee03abbe5c8bb3ed7b3a" }
    ];
    this.selectedPage = this.pages[0];
  }
  ngOnInit() {
  }
  selectPage(page) {
    this.selectedPage = page;
  }
  getEmbedUrl() {
    return `https://app.powerbi.com/reportEmbed?reportId=${this.reportId}&pageName=${this.selectedPage.name}&autoAuth=true&ctid=${this.ctid}`;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "dashboard-wrapper"], [1, "report-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "iframe-wrapper"], ["width", "100%", "height", "100%", "frameborder", "0", "allowFullScreen", "true", 2, "border", "none", "display", "block", 3, "src"], [1, "tab-btn", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
        \u0275\u0275template(2, DashboardComponent_button_2_Template, 2, 3, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "iframe", 4);
        \u0275\u0275pipe(5, "safeUrl");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", \u0275\u0275pipeBind1(5, 2, ctx.getEmbedUrl()), \u0275\u0275sanitizeResourceUrl);
      }
    }, dependencies: [CommonModule, NgForOf, SafeUrlPipe], styles: ['@charset "UTF-8";\n\n\n\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 60px);\n  margin: -24px;\n  background: #1a2540;\n  overflow: hidden;\n}\n.report-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  padding: 0 12px;\n  background: #1a2540;\n  border-bottom: 2px solid #2a3a5c;\n  flex-shrink: 0;\n  height: 48px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: transparent;\n  border: none;\n  border-radius: 6px 6px 0 0;\n  color: rgba(255, 255, 255, 0.55);\n  font-family: "Inter", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 10px 22px 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.18s ease, background 0.18s ease;\n  letter-spacing: 0.01em;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.07);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: rgba(245, 166, 35, 0.1);\n}\n.tab-btn.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #f5a623;\n  border-radius: 2px 2px 0 0;\n}\n.iframe-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 17 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-GNS6B2AL.js.map
