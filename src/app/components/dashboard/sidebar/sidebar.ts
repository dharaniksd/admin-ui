import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
  subItems?: MenuItem[];
  collapsed?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { icon: '📊', label: 'Dashboard', active: true },
    { 
      icon: '📈', 
      label: 'Analytics', 
      active: false,
      collapsed: true,
      subItems: [
        { icon: '📉', label: 'Reports', active: false },
        { icon: '📊', label: 'Statistics', active: false },
        { icon: '📋', label: 'Logs', active: false }
      ]
    },
    { 
      icon: '💰', 
      label: 'Sales', 
      active: false,
      collapsed: true,
      subItems: [
        { icon: '🛒', label: 'Orders', active: false },
        { icon: '💳', label: 'Payments', active: false },
        { icon: '📦', label: 'Products', active: false }
      ]
    },
    { icon: '🔔', label: 'Notifications', active: false },
    { 
      icon: '⚙️', 
      label: 'Settings', 
      active: false,
      collapsed: true,
      subItems: [
        { icon: '👤', label: 'Profile', active: false },
        { icon: '🔒', label: 'Security', active: false },
        { icon: '🎨', label: 'Preferences', active: false }
      ]
    },
  ];

  toggleSubmenu(item: MenuItem): void {
    if (item.subItems) {
      item.collapsed = !item.collapsed;
    }
  }
}
