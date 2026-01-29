import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface defining the structure of a menu item
 */
interface MenuItem {
  /** Emoji icon to display */
  icon: string;
  /** Display label for the menu item */
  label: string;
  /** Whether this menu item is currently active */
  active: boolean;
  /** Optional array of sub-menu items */
  subItems?: MenuItem[];
  /** Whether the submenu is collapsed (only applicable if subItems exist) */
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

  /**
   * Toggles the collapsed state of a menu item with submenus
   * @param item The menu item to toggle
   */
  toggleSubmenu(item: MenuItem): void {
    if (item.subItems) {
      item.collapsed = !item.collapsed;
    }
  }
}
