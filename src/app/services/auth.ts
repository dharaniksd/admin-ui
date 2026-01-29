import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      // Load users from dummy JSON file
      const response = await fetch('/data/users.json');
      const data = await response.json();
      
      const user = data.users.find(
        (u: any) => u.username === username && u.password === password
      );

      if (user) {
        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;
        
        // Store user details in localStorage
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        this.currentUserSubject.next(userWithoutPassword);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  logout() {
    // Remove user from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUserValue !== null;
  }
}
