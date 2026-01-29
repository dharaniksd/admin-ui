import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

@Component({
  selector: 'app-monitoring',
  imports: [CommonModule],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.scss',
})
export class MonitoringComponent implements OnInit {
  metrics: MetricCard[] = [];

  ngOnInit() {
    this.loadMetrics();
  }

  loadMetrics() {
    this.metrics = [
      {
        title: 'Total Revenue',
        value: '$45,231',
        change: '+12.5%',
        isPositive: true,
        icon: '💰'
      },
      {
        title: 'Active Users',
        value: '2,543',
        change: '+8.2%',
        isPositive: true,
        icon: '👥'
      },
      {
        title: 'Orders',
        value: '1,234',
        change: '+5.7%',
        isPositive: true,
        icon: '📦'
      },
      {
        title: 'Conversion Rate',
        value: '3.45%',
        change: '-2.1%',
        isPositive: false,
        icon: '📊'
      }
    ];
  }
}
