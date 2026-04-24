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

  logout(): void {
    this.auth.logout();
  }
}
