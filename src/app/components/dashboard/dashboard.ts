import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { MonitoringComponent } from './monitoring/monitoring';
import { SalesGraphComponent } from './sales-graph/sales-graph';
import { NotificationsComponent } from './notifications/notifications';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    SidebarComponent,
    MonitoringComponent,
    SalesGraphComponent,
    NotificationsComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {

}
