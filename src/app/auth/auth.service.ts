import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private messageService: MessageService) {}

  isAuthenticated() {
    return false;
  }

  login(input: { email: string; password: string }) {
    this.apiService.login(input).subscribe({
      next: (res) => {
        if (res && res.access_token) {
          window.localStorage.setItem('token', res.access_token);
          return true;
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
