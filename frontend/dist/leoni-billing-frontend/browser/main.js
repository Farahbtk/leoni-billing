import {
  ThemeService
} from "./chunk-7RNVM5YD.js";
import {
  AuthService
} from "./chunk-MVY7NJAQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-U3DLQZFR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-EOJBJDFG.js";
import "./chunk-32VODOFB.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatRipple,
  MatRippleModule
} from "./chunk-7F5FDPEU.js";
import "./chunk-N625QWFE.js";
import {
  DomRendererFactory2,
  bootstrapApplication,
  provideHttpClient,
  withInterceptors
} from "./chunk-LMCEUH37.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-E6MJ6NZN.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  EventEmitter,
  Injectable,
  NgZone,
  RendererFactory2,
  RuntimeError,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UIKDKAPR.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-4JSC2DLD.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static {
    this.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AsyncAnimationRendererFactory,
      factory: _AsyncAnimationRendererFactory.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return router.createUrlTree(["/login"]);
  }
  if (auth.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/dashboard"]);
};

// src/app/shared/sidebar/sidebar.component.ts
function SidebarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "LEONI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "Billing Dashboard");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "MAIN MENU");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_li_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function SidebarComponent_li_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.badge);
  }
}
function SidebarComponent_li_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function SidebarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19)(2, "mat-icon", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_li_11_span_4_Template, 2, 1, "span", 11)(5, SidebarComponent_li_11_span_5_Template, 2, 1, "span", 20)(6, SidebarComponent_li_11_span_6_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route)("matRippleColor", "rgba(255,255,255,0.08)")("matTooltip", ctx_r1.collapsed ? item_r1.label : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.badge && !ctx_r1.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.badge && ctx_r1.collapsed);
  }
}
function SidebarComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Settings");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "ACCOUNT");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.displayName[0] == null ? null : ctx_r1.displayName[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
  }
}
function SidebarComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(auth) {
    this.auth = auth;
    this.collapsed = false;
    this.collapseToggle = new EventEmitter();
    this.allNavItems = [
      { label: "Dashboard", icon: "dashboard", route: "/dashboard" },
      { label: "Invoices", icon: "receipt_long", route: "/invoices" },
      { label: "Clients", icon: "business", route: "/clients" },
      { label: "Alerts", icon: "notifications", route: "/alerts", badge: 3 },
      { label: "Reports", icon: "bar_chart", route: "/reports" },
      { label: "User Management", icon: "manage_accounts", route: "/user-management", adminOnly: true }
    ];
  }
  get navItems() {
    return this.allNavItems.filter((item) => !item.adminOnly || this.auth.isAdmin());
  }
  get displayName() {
    return this.auth.getDisplayName();
  }
  get roleLabel() {
    return this.auth.getCurrentUser()?.role === "ADMIN" ? "Administrator" : "Billing Manager";
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { collapsed: "collapsed" }, outputs: { collapseToggle: "collapseToggle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 15, consts: [[1, "sidebar"], [1, "sidebar-logo"], [1, "logo-icon"], ["class", "logo-text", 4, "ngIf"], [1, "collapse-btn", 3, "click", "matTooltip"], ["class", "nav-section-label", 4, "ngIf"], [1, "nav-list"], [4, "ngFor", "ngForOf"], [1, "sidebar-bottom"], ["routerLinkActive", "active", "matRipple", "", "matTooltipPosition", "right", 1, "nav-item", "settings-item", 3, "routerLink", "matRippleColor", "matTooltip"], [1, "nav-icon"], ["class", "nav-label", 4, "ngIf"], [1, "sidebar-divider"], ["class", "user-info", 4, "ngIf"], ["matRipple", "", "matTooltipPosition", "right", 1, "nav-item", "logout-btn", 3, "click", "matTooltip"], [1, "logo-text"], [1, "logo-name"], [1, "logo-sub"], [1, "nav-section-label"], ["routerLinkActive", "active", "matRipple", "", "matTooltipPosition", "right", 1, "nav-item", 3, "routerLink", "matRippleColor", "matTooltip"], ["class", "nav-badge", 4, "ngIf"], ["class", "nav-badge-dot", 4, "ngIf"], [1, "nav-label"], [1, "nav-badge"], [1, "nav-badge-dot"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
        \u0275\u0275text(4, "electric_bolt");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, SidebarComponent_div_5_Template, 5, 0, "div", 3);
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_6_listener() {
          return ctx.collapseToggle.emit();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, SidebarComponent_div_9_Template, 2, 0, "div", 5);
        \u0275\u0275elementStart(10, "ul", 6);
        \u0275\u0275template(11, SidebarComponent_li_11_Template, 7, 7, "li", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "mat-icon", 10);
        \u0275\u0275text(15, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, SidebarComponent_span_16_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "div", 12);
        \u0275\u0275template(18, SidebarComponent_div_18_Template, 2, 0, "div", 5)(19, SidebarComponent_div_19_Template, 8, 3, "div", 13);
        \u0275\u0275elementStart(20, "button", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_20_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(21, "mat-icon", 10);
        \u0275\u0275text(22, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, SidebarComponent_span_23_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("collapsed", ctx.collapsed);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx.collapsed ? "Expand" : "Collapse");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.collapsed ? "chevron_right" : "chevron_left");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "/settings")("matRippleColor", "rgba(255,255,255,0.08)")("matTooltip", ctx.collapsed ? "Settings" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx.collapsed ? "Logout" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.collapsed);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatRippleModule, MatRipple], styles: ['@charset "UTF-8";\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  min-height: 100vh;\n  background: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  overflow: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0 16px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 16px 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  min-height: 72px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: var(--sidebar-active);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--sidebar-text);\n  font-weight: 400;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sidebar-text);\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: rgba(168, 184, 216, 0.5);\n  padding: 16px 20px 6px;\n  text-transform: uppercase;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 10px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: none;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--sidebar-text);\n  flex-shrink: 0;\n  transition: color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 1px 6px;\n  min-width: 18px;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--danger);\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 10px;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  margin-bottom: 4px;\n}\n.user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--sidebar-active);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #fff;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sidebar-text);\n}\n.settings-item[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 8px 10px;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  color: var(--sidebar-text);\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.logout-btn[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\shared\\sidebar\\sidebar.component.ts", lineNumber: 24 });
})();

// src/app/shared/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  constructor(theme) {
    this.theme = theme;
    this.sidebarCollapsed = localStorage.getItem("leoni_compact_sidebar") === "true";
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 5, consts: [[1, "app-shell"], [3, "collapseToggle", "collapsed"], [1, "main-wrapper"], [1, "top-bar"], [1, "top-spacer"], ["mat-icon-button", "", "matTooltipPosition", "below", 1, "theme-toggle", 3, "click", "matTooltip"], [1, "main-content"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-sidebar", 1);
        \u0275\u0275listener("collapseToggle", function LayoutComponent_Template_app_sidebar_collapseToggle_1_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "header", 3);
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_5_listener() {
          return ctx.theme.toggle();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275element(9, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("collapsed", ctx.sidebarCollapsed);
        \u0275\u0275advance();
        \u0275\u0275property("collapsed", ctx.sidebarCollapsed);
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", ctx.theme.isDark ? "Switch to light mode" : "Switch to dark mode");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.theme.isDark ? "light_mode" : "dark_mode");
      }
    }, dependencies: [CommonModule, RouterOutlet, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatTooltipModule, MatTooltip, SidebarComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.app-shell[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 0;\n  background: var(--bg-main);\n}\n.app-shell.collapsed[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%] {\n  margin-left: 72px;\n}\n.app-shell[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 52px;\n  padding: 0 20px;\n  background: var(--bg-card);\n  border-bottom: 1px solid var(--border);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.app-shell[_ngcontent-%COMP%]   .top-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.app-shell[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  transition: color 0.2s ease;\n}\n.app-shell[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.app-shell[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 32px;\n  background: var(--bg-main);\n  transition: background 0.3s ease;\n}\n@media (max-width: 768px) {\n  .app-shell[_ngcontent-%COMP%]   .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .app-shell[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\shared\\layout\\layout.component.ts", lineNumber: 17 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", loadComponent: () => import("./chunk-BCNTVHMA.js").then((m) => m.LoginComponent) },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-FP5FW5ZD.js").then((m) => m.DashboardComponent)
      },
      {
        path: "invoices",
        loadComponent: () => import("./chunk-HNU63AJR.js").then((m) => m.InvoiceListComponent)
      },
      {
        path: "invoices/:id",
        loadComponent: () => import("./chunk-VP7FDETX.js").then((m) => m.InvoiceDetailComponent)
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-CIQ47EAW.js").then((m) => m.ClientsComponent)
      },
      {
        path: "alerts",
        loadComponent: () => import("./chunk-ILHGHDTL.js").then((m) => m.AlertsComponent)
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-KUKDJ5KK.js").then((m) => m.ReportsComponent)
      },
      {
        path: "user-management",
        canActivate: [adminGuard],
        loadComponent: () => import("./chunk-DSZBNXK3.js").then((m) => m.UserManagementComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-ODCYQMSB.js").then((m) => m.SettingsComponent)
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/core/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
