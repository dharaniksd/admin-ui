import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '💰', label: 'Sales', active: false },
    { icon: '🔔', label: 'Notifications', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ];
}
