import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
  icon: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notifications = [
      {
        id: 1,
        title: 'New Order Received',
        message: 'Order #12345 has been placed successfully',
        time: '5 minutes ago',
        type: 'success',
        icon: '✅',
        read: false
      },
      {
        id: 2,
        title: 'Payment Processed',
        message: 'Payment of $1,234 received from customer',
        time: '15 minutes ago',
        type: 'success',
        icon: '💳',
        read: false
      },
      {
        id: 3,
        title: 'Low Stock Alert',
        message: 'Product XYZ is running low on stock',
        time: '1 hour ago',
        type: 'warning',
        icon: '⚠️',
        read: false
      },
      {
        id: 4,
        title: 'Server Status',
        message: 'All systems are operational',
        time: '2 hours ago',
        type: 'info',
        icon: 'ℹ️',
        read: true
      },
      {
        id: 5,
        title: 'Failed Login Attempt',
        message: 'Multiple failed login attempts detected',
        time: '3 hours ago',
        type: 'error',
        icon: '❌',
        read: true
      }
    ];
  }

  markAsRead(notification: Notification) {
    notification.read = true;
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}
