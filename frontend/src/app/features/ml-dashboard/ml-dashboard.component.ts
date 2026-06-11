import { Component } from '@angular/core';

@Component({
  selector: 'app-ml-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div class="ml-wrapper">
      <iframe
        src="assets/leoni_ml_dashboard_v4.html"
        title="ML Risk Alerts Dashboard"
        frameborder="0">
      </iframe>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .ml-wrapper {
      /* escape main-content padding (28px top, 32px sides) and fill viewport below top-bar (52px) */
      margin: -28px -32px;
      height: calc(100vh - 52px);
      overflow: hidden;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
    }
  `]
})
export class MlDashboardComponent {}
