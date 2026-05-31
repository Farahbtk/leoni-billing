import {
  BaseChartDirective,
  NgChartsModule
} from "./chunk-CAWZ3VOE.js";
import {
  MatCardModule
} from "./chunk-UJAF7ICR.js";
import {
  InvoiceService
} from "./chunk-Z6YSHN3K.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-35OIBYTL.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-KFYCFTGM.js";
import {
  MatChipsModule
} from "./chunk-IM5U6RPR.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DG76QNLL.js";
import "./chunk-ORJRZS75.js";
import "./chunk-WJ3XFFVQ.js";
import {
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-GP3DPIH4.js";
import "./chunk-GZT44RQ4.js";
import "./chunk-IT5HHABJ.js";
import {
  CommonModule,
  CurrencyPipe,
  DOCUMENT,
  DatePipe,
  NgIf
} from "./chunk-Q6QAO5LM.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewEncapsulation$1,
  __spreadValues,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5P2RJQ5K.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  constructor(_elementRef, _ngZone, _changeDetectorRef, _animationMode, defaults) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._isNoopAnimation = false;
    this._defaultColor = "primary";
    this._value = 0;
    this._bufferValue = 0;
    this.animationEnd = new EventEmitter();
    this._mode = "determinate";
    this._transitionendHandler = (event) => {
      if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
        return;
      }
      if (this.mode === "determinate" || this.mode === "buffer") {
        this._ngZone.run(() => this.animationEnd.next({
          value: this.value
        }));
      }
    };
    this._isNoopAnimation = _animationMode === "NoopAnimations";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /** Theme palette color of the progress bar. */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener("transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener("transitionend", this._transitionendHandler);
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  static {
    this.\u0275fac = function MatProgressBar_Factory(t) {
      return new (t || _MatProgressBar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatProgressBar,
      selectors: [["mat-progress-bar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
      hostVars: 10,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
          \u0275\u0275classMap("mat-" + ctx.color);
          \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
        }
      },
      inputs: {
        color: "color",
        value: [InputFlags.HasDecoratorInputTransform, "value", "value", numberAttribute],
        bufferValue: [InputFlags.HasDecoratorInputTransform, "bufferValue", "bufferValue", numberAttribute],
        mode: "mode"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275template(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "div", 5);
          \u0275\u0275element(6, "span", 4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
          \u0275\u0275advance();
          \u0275\u0275conditional(2, ctx.mode === "buffer" ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
        }
      },
      styles: [`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static {
    this.\u0275fac = function MatProgressBarModule_Factory(t) {
      return new (t || _MatProgressBarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatProgressBarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/features/invoices/invoice-detail/invoice-detail.component.ts
function InvoiceDetailComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Days Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.daysOverdue, " days");
  }
}
function InvoiceDetailComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.invoice.description);
  }
}
function InvoiceDetailComponent_div_0_div_77_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, " This invoice has a high probability of late payment. Immediate follow-up is recommended. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, " Moderate risk detected. Monitor closely and consider early reminder. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, " Low risk of payment delay. No action required. ");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_div_0_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5, "Payment Delay Risk");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-progress-bar", 30);
    \u0275\u0275elementStart(7, "div", 31)(8, "span");
    \u0275\u0275text(9, "Low (0%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "High (100%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 32)(13, "mat-icon");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, InvoiceDetailComponent_div_0_div_77_p_17_Template, 2, 0, "p", 33)(18, InvoiceDetailComponent_div_0_div_77_p_18_Template, 2, 0, "p", 34)(19, InvoiceDetailComponent_div_0_div_77_p_19_Template, 2, 0, "p", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRiskClass(ctx_r1.invoice.riskScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.invoice.riskScore, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mode", "determinate")("value", ctx_r1.invoice.riskScore)("color", ctx_r1.invoice.riskScore >= 70 ? "warn" : "primary");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.getRiskClass(ctx_r1.invoice.riskScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.invoice.riskScore >= 70 ? "warning" : ctx_r1.invoice.riskScore >= 40 ? "info" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.riskLevel, " RISK");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore >= 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore >= 40 && ctx_r1.invoice.riskScore < 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore < 40);
  }
}
function InvoiceDetailComponent_div_0_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-icon");
    \u0275\u0275text(2, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'No prediction yet. Click "Run Prediction" to assess risk.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_ng_template_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runPrediction());
    });
    \u0275\u0275text(6, "Run Prediction");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_div_0_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Risk Factor Explanation (SHAP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "XGBoost feature contributions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "mat-divider");
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275element(8, "canvas", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45)(10, "div", 46);
    \u0275\u0275element(11, "span", 47);
    \u0275\u0275text(12, " Increases risk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275element(14, "span", 48);
    \u0275\u0275text(15, " Decreases risk");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("data", ctx_r1.shapChartData)("options", ctx_r1.shapChartOptions);
  }
}
function InvoiceDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 3)(2, "div", 4)(3, "button", 5)(4, "mat-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 7)(13, "mat-icon");
    \u0275\u0275text(14, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Export PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 8);
    \u0275\u0275listener("click", function InvoiceDetailComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runPrediction());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "h3");
    \u0275\u0275text(24, "Invoice Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 12);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "mat-divider");
    \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31, "Invoice Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14)(35, "span", 15);
    \u0275\u0275text(36, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 16);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "span", 15);
    \u0275\u0275text(41, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 17);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14)(46, "span", 15);
    \u0275\u0275text(47, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 18);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 14)(51, "span", 15);
    \u0275\u0275text(52, "Issue Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 18);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "span", 15);
    \u0275\u0275text(58, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 18);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 14)(63, "span", 15);
    \u0275\u0275text(64, "Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 18);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, InvoiceDetailComponent_div_0_div_67_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "mat-divider", 20);
    \u0275\u0275template(69, InvoiceDetailComponent_div_0_div_69_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 21)(71, "div", 11)(72, "h3");
    \u0275\u0275text(73, "AI Risk Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-icon", 22);
    \u0275\u0275text(75, "psychology");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(76, "mat-divider");
    \u0275\u0275template(77, InvoiceDetailComponent_div_0_div_77_Template, 20, 13, "div", 23)(78, InvoiceDetailComponent_div_0_ng_template_78_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, InvoiceDetailComponent_div_0_div_80_Template, 16, 2, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noRisk_r4 = \u0275\u0275reference(79);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.invoice.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.clientName, " \u2014 Invoice Detail");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.predicting);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.predicting ? "Running..." : "Run Prediction", " ");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.invoice.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.invoice.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.invoice.invoiceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.invoice.clientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(44, 21, ctx_r1.invoice.amount, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.invoice.currency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 26, ctx_r1.invoice.issueDate, "MMMM d, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-danger", ctx_r1.invoice.status === "OVERDUE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 29, ctx_r1.invoice.dueDate, "MMMM d, yyyy"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.invoice.paymentTerms, " days");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoice.daysOverdue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.invoice.description);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.invoice.riskScore !== void 0)("ngIfElse", noRisk_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.invoice.shapExplanation || ctx_r1.invoice.riskScore !== void 0);
  }
}
function InvoiceDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "mat-progress-bar", 50);
    \u0275\u0275elementEnd();
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
  constructor(route, invoiceService, snack) {
    this.route = route;
    this.invoiceService = invoiceService;
    this.snack = snack;
    this.loading = true;
    this.predicting = false;
    this.shapChartData = { labels: [], datasets: [] };
    this.shapChartOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => ` Impact: ${c.raw > 0 ? "+" : ""}${c.raw}` } } },
      scales: {
        x: { grid: { color: "rgba(0,0,0,0.04)" }, ticks: { font: { family: "Inter", size: 11 } } },
        y: { grid: { display: false }, ticks: { font: { family: "Inter", size: 11 } } }
      }
    };
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.invoiceService.getById(id).subscribe({
      next: (inv) => {
        this.invoice = inv;
        this.buildShapChart();
        this.loading = false;
      },
      error: () => {
        this.invoice = MOCK_INVOICE_DETAIL;
        this.buildShapChart();
        this.loading = false;
      }
    });
  }
  runPrediction() {
    this.predicting = true;
    this.invoiceService.runPrediction([this.invoice.id]).subscribe({
      next: (updated) => {
        this.invoice = __spreadValues(__spreadValues({}, this.invoice), updated[0]);
        this.buildShapChart();
        this.predicting = false;
        this.snack.open("Prediction updated successfully", "OK", { duration: 3e3 });
      },
      error: () => {
        this.predicting = false;
        this.snack.open("Prediction service unavailable", "Close", { duration: 4e3 });
      }
    });
  }
  buildShapChart() {
    const factors = this.invoice.shapExplanation ?? MOCK_SHAP;
    const sorted = [...factors].sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact)).slice(0, 8);
    this.shapChartData = {
      labels: sorted.map((f) => f.feature),
      datasets: [{
        data: sorted.map((f) => f.impact),
        backgroundColor: sorted.map((f) => f.impact > 0 ? "rgba(239,68,68,0.75)" : "rgba(16,185,129,0.75)"),
        borderRadius: 4
      }]
    };
  }
  getRiskClass(score) {
    if (score >= 70)
      return "high";
    if (score >= 40)
      return "medium";
    return "low";
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(t) {
      return new (t || _InvoiceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["noRisk", ""], [4, "ngIf"], ["style", "display:flex;justify-content:center;padding:80px", 4, "ngIf"], [1, "page-header"], [1, "page-title", 2, "display", "flex", "align-items", "center", "gap", "12px"], ["mat-icon-button", "", "routerLink", "/invoices"], [2, "display", "flex", "gap", "10px"], ["mat-stroked-button", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "detail-grid"], [1, "info-card"], [1, "card-header"], [1, "status-chip"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value", "fw-600"], [1, "info-value", "fw-600", "amount"], [1, "info-value"], ["class", "info-item", 4, "ngIf"], [2, "margin", "16px 0"], [1, "risk-card"], [2, "color", "var(--primary)"], ["class", "risk-content", 4, "ngIf", "ngIfElse"], ["class", "shap-card", 4, "ngIf"], [1, "info-value", "text-danger", "fw-600"], [1, "risk-content"], [1, "risk-gauge"], [1, "gauge-value"], [1, "gauge-label"], [2, "height", "8px", "border-radius", "4px", "margin-top", "12px", 3, "mode", "value", "color"], [1, "gauge-scale"], [1, "risk-level-badge"], ["class", "risk-message", 4, "ngIf"], ["class", "risk-message medium", 4, "ngIf"], ["class", "risk-message low", 4, "ngIf"], [1, "risk-message"], [1, "risk-message", "medium"], [1, "risk-message", "low"], [1, "no-prediction"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "shap-card"], [1, "text-muted", 2, "font-size", "0.78rem"], [1, "shap-chart"], ["baseChart", "", "type", "bar", 3, "data", "options"], [1, "shap-legend"], [1, "legend-item"], [1, "dot", "red"], [1, "dot", "green"], [2, "display", "flex", "justify-content", "center", "padding", "80px"], ["mode", "indeterminate", 2, "width", "200px"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InvoiceDetailComponent_div_0_Template, 81, 32, "div", 1)(1, InvoiceDetailComponent_div_1_Template, 2, 0, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.loading && ctx.invoice);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      CurrencyPipe,
      DatePipe,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDividerModule,
      MatDivider,
      MatProgressBarModule,
      MatProgressBar,
      MatChipsModule,
      MatSnackBarModule,
      NgChartsModule,
      BaseChartDirective
    ], styles: ['@charset "UTF-8";\n\n\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  grid-template-rows: auto auto;\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-card);\n  padding: 20px 24px;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .risk-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .shap-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 16px;\n}\n@media (max-width: 600px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.info-item[_ngcontent-%COMP%]   .info-value.amount[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--primary);\n}\n.risk-content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.high[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.medium[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-value.low[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-gauge[_ngcontent-%COMP%]   .gauge-scale[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 12px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.high[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.medium[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.low[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge.low[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.risk-content[_ngcontent-%COMP%]   .risk-level-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #991b1b;\n  background: #fee2e2;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message.medium[_ngcontent-%COMP%] {\n  color: #92400e;\n  background: #fef3c7;\n}\n.risk-content[_ngcontent-%COMP%]   .risk-message.low[_ngcontent-%COMP%] {\n  color: #065f46;\n  background: #d1fae5;\n}\n.no-prediction[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 16px;\n  text-align: center;\n  color: var(--text-secondary);\n}\n.no-prediction[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.no-prediction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.shap-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.shap-chart[_ngcontent-%COMP%] {\n  height: 260px;\n  margin-top: 16px;\n}\n.shap-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 12px;\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.shap-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.shap-legend[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n}\n.shap-legend[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.75);\n}\n.shap-legend[_ngcontent-%COMP%]   .dot.green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.75);\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "src\\app\\features\\invoices\\invoice-detail\\invoice-detail.component.ts", lineNumber: 28 });
})();
var MOCK_SHAP = [
  { feature: "Days since last late payment", value: 45, impact: 0.28 },
  { feature: "Invoice amount (EUR)", value: 42e4, impact: 0.22 },
  { feature: "Client payment history score", value: 62, impact: -0.18 },
  { feature: "Days to due date", value: 8, impact: 0.15 },
  { feature: "Overdue count last 12 months", value: 3, impact: 0.12 },
  { feature: "Client credit utilization", value: 0.71, impact: 0.09 },
  { feature: "Payment terms (days)", value: 30, impact: -0.06 },
  { feature: "Seasonality factor", value: 0.8, impact: 0.04 }
];
var MOCK_INVOICE_DETAIL = {
  id: 2,
  invoiceNumber: "INV-2024-002",
  clientId: 2,
  clientName: "Volkswagen AG",
  amount: 42e4,
  currency: "EUR",
  issueDate: "2024-01-15",
  dueDate: "2024-02-14",
  status: "OVERDUE",
  riskScore: 78,
  riskLevel: "HIGH",
  paymentTerms: 30,
  daysOverdue: 18,
  description: "Wire harness systems \u2014 Q1 2024 delivery batch",
  shapExplanation: MOCK_SHAP
};
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=chunk-V5OMTLPO.js.map
