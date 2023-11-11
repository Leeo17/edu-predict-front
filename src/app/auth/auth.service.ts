import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ApiService } from '../shared/services/api.service';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private messageService: MessageService, private router: Router) {}

  isAuthenticated() {
    const token = this.getAuthorizationToken();
    if (!token) return false;

    return !this.isTokenExpired(token);
  }

  getAuthorizationToken() {
    return window.localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded = jwtDecode(token);

    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);

    return !!date ? date.valueOf() < new Date().valueOf() : false;
  }

  login(input: { email: string; password: string }) {
    this.apiService.login(input).subscribe({
      next: (res) => {
        if (res && res.access_token) {
          window.localStorage.setItem('token', res.access_token);
          this.router.navigate(['/home']);
        }
        return false;
      },
      error: (err) => {
        console.log(err);
        this.messageService.showNotification(err.error.detail);
      },
    });
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
