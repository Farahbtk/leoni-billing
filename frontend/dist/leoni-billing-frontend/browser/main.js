import {
  AuthService
} from "./chunk-VI4JGZMU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TW5PKVOR.js";
import "./chunk-QKNRMUAZ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-YSSCNL4Y.js";
import "./chunk-PYIK4VV4.js";
import "./chunk-32VODOFB.js";
import {
  DomRendererFactory2,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatRipple,
  MatRippleModule,
  Platform,
  bootstrapApplication,
  provideHttpClient,
  withInterceptors
} from "./chunk-SWEXKP5I.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation$1,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-II2NPOOE.js";

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
    const moduleImpl = this.moduleImpl ?? import("./chunk-FGA2X7N6.js");
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

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static {
    this.\u0275fac = function MatToolbarRow_Factory(t) {
      return new (t || _MatToolbarRow)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatToolbarRow,
      selectors: [["mat-toolbar-row"]],
      hostAttrs: [1, "mat-toolbar-row"],
      exportAs: ["matToolbarRow"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  constructor(_elementRef, _platform, document) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._document = document;
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static {
    this.\u0275fac = function MatToolbar_Factory(t) {
      return new (t || _MatToolbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatToolbar,
      selectors: [["mat-toolbar"]],
      contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
        }
      },
      hostAttrs: [1, "mat-toolbar"],
      hostVars: 6,
      hostBindings: function MatToolbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
          \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matToolbar"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatToolbar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c0);
          \u0275\u0275projection(0);
          \u0275\u0275projection(1, 1);
        }
      },
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static {
    this.\u0275fac = function MatToolbarModule_Factory(t) {
      return new (t || _MatToolbarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatToolbarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/shared/sidebar/sidebar.component.ts
function SidebarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "LEONI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Billing Dashboard");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "MAIN MENU");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_li_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
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
    \u0275\u0275elementStart(0, "span", 21);
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
    \u0275\u0275element(0, "span", 22);
  }
}
function SidebarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 17)(2, "mat-icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_li_11_span_4_Template, 2, 1, "span", 12)(5, SidebarComponent_li_11_span_5_Template, 2, 1, "span", 18)(6, SidebarComponent_li_11_span_6_Template, 1, 0, "span", 19);
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
function SidebarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "ACCOUNT");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
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
function SidebarComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { collapsed: "collapsed" }, outputs: { collapseToggle: "collapseToggle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 11, consts: [[1, "sidebar"], [1, "sidebar-logo"], [1, "logo-icon"], ["class", "logo-text", 4, "ngIf"], [1, "collapse-btn", 3, "click", "matTooltip"], ["class", "nav-section-label", 4, "ngIf"], [1, "nav-list"], [4, "ngFor", "ngForOf"], [1, "sidebar-bottom"], ["class", "user-info", 4, "ngIf"], ["matRipple", "", "matTooltipPosition", "right", 1, "nav-item", "logout-btn", 3, "click", "matTooltip"], [1, "nav-icon"], ["class", "nav-label", 4, "ngIf"], [1, "logo-text"], [1, "logo-name"], [1, "logo-sub"], [1, "nav-section-label"], ["routerLinkActive", "active", "matRipple", "", "matTooltipPosition", "right", 1, "nav-item", 3, "routerLink", "matRippleColor", "matTooltip"], ["class", "nav-badge", 4, "ngIf"], ["class", "nav-badge-dot", 4, "ngIf"], [1, "nav-label"], [1, "nav-badge"], [1, "nav-badge-dot"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"]], template: function SidebarComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275template(13, SidebarComponent_div_13_Template, 2, 0, "div", 5)(14, SidebarComponent_div_14_Template, 8, 3, "div", 9);
        \u0275\u0275elementStart(15, "button", 10);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_15_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(16, "mat-icon", 11);
        \u0275\u0275text(17, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, SidebarComponent_span_18_Template, 2, 0, "span", 12);
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
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx.collapsed ? "Logout" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.collapsed);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatRippleModule, MatRipple], styles: ['@charset "UTF-8";\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  min-height: 100vh;\n  background: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  overflow: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0 16px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 16px 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  min-height: 72px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: var(--sidebar-active);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--sidebar-text);\n  font-weight: 400;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--sidebar-text);\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  flex-shrink: 0;\n  transition: background 0.15s, color 0.15s;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: rgba(168, 184, 216, 0.5);\n  padding: 16px 20px 6px;\n  text-transform: uppercase;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 10px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: none;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--sidebar-text);\n  flex-shrink: 0;\n  transition: color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 1px 6px;\n  min-width: 18px;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--danger);\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 10px;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  margin-bottom: 4px;\n}\n.user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--sidebar-active);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #fff;\n}\n.user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sidebar-text);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  color: var(--sidebar-text);\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.logout-btn[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\shared\\sidebar\\sidebar.component.ts", lineNumber: 24 });
})();

// src/app/shared/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  constructor() {
    this.sidebarCollapsed = false;
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "app-shell"], [3, "collapseToggle", "collapsed"], [1, "main-content"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-sidebar", 1);
        \u0275\u0275listener("collapseToggle", function LayoutComponent_Template_app_sidebar_collapseToggle_1_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("collapsed", ctx.sidebarCollapsed);
        \u0275\u0275advance();
        \u0275\u0275property("collapsed", ctx.sidebarCollapsed);
      }
    }, dependencies: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, SidebarComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.app-shell[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  padding: 28px 32px;\n  min-height: 100vh;\n  background: var(--bg-main);\n  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 0;\n}\n.app-shell.collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 72px;\n}\n@media (max-width: 768px) {\n  .app-shell[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\shared\\layout\\layout.component.ts", lineNumber: 16 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", loadComponent: () => import("./chunk-MBGLOG2L.js").then((m) => m.LoginComponent) },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-TVNIVBTW.js").then((m) => m.DashboardComponent)
      },
      {
        path: "invoices",
        loadComponent: () => import("./chunk-PCFQK4PV.js").then((m) => m.InvoiceListComponent)
      },
      {
        path: "invoices/:id",
        loadComponent: () => import("./chunk-QR6KOJWN.js").then((m) => m.InvoiceDetailComponent)
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-FXIJ2VMS.js").then((m) => m.ClientsComponent)
      },
      {
        path: "alerts",
        loadComponent: () => import("./chunk-GOVSVIUB.js").then((m) => m.AlertsComponent)
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-NUWNLPFV.js").then((m) => m.ReportsComponent)
      },
      {
        path: "user-management",
        canActivate: [adminGuard],
        loadComponent: () => import("./chunk-DN5E4J56.js").then((m) => m.UserManagementComponent)
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
