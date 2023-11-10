import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private messageService: MessageService, private router: Router) {}

  isAuthenticated() {
    return false;
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
}
