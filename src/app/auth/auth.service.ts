import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  isAuthenticated() {
    return false;
  }

  login(input: { email: string; password: string }) {
    this.apiService.login(input).subscribe((res) => {
      if (res && res.access_token) {
        window.localStorage.setItem('token', res.access_token);
        return true;
      }
      return false;
    });
  }
}
