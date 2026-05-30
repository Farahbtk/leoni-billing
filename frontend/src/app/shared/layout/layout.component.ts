import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule, MatTooltipModule, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarCollapsed = localStorage.getItem('leoni_compact_sidebar') === 'true';

  constructor(public theme: ThemeService) {}

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
