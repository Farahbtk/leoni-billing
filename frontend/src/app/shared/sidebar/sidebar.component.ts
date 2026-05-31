import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { AuthService } from '../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, MatIconModule, MatTooltipModule, MatRippleModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input()  collapsed = false;
  @Output() collapseToggle = new EventEmitter<void>();

  allNavItems: NavItem[] = [
    { label: 'Dashboard',       icon: 'dashboard',       route: '/dashboard'         },
    { label: 'Invoices',        icon: 'receipt_long',    route: '/invoices'          },
    { label: 'Clients',         icon: 'business',        route: '/clients'           },
    { label: 'Alerts',          icon: 'notifications',   route: '/alerts', badge: 3  },
    { label: 'Reports',         icon: 'bar_chart',       route: '/reports'           },
    { label: 'User Management', icon: 'manage_accounts', route: '/user-management', adminOnly: true }
  ];

  constructor(public auth: AuthService) {}

  get navItems(): NavItem[] {
    return this.allNavItems.filter(item => !item.adminOnly || this.auth.isAdmin());
  }

  get displayName(): string {
    return this.auth.getDisplayName();
  }

  get roleLabel(): string {
    return this.auth.getCurrentUser()?.role === 'ADMIN' ? 'Administrator' : 'Billing Manager';
  }

  private readonly POWERAPPS_URL = `https://apps.powerapps.com/play/e/default-b7bd4715-4217-48c7-919e-2ea97f592fa7/a/a5c4e5ec-949b-4f0e-aa13-7b8f94289025?tenantId=b7bd4715-4217-48c7-919e-2ea97f592fa7&hint=87fb8e82-8f3d-49d0-b844-222202695999&sourcetime=${Date.now()}`;

  openPowerApps(): void {
    window.open(this.POWERAPPS_URL, '_blank', 'width=950,height=700,noopener,noreferrer');
  }

  logout(): void {
    this.auth.logout();
  }
}
