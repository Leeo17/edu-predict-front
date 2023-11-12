import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User | null = null;
  userFirstName: string | undefined = undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const rawUser = window.localStorage.getItem('user');
    if (rawUser) {
      this.user = JSON.parse(rawUser);
      this.userFirstName = this.user?.nome;
    }
  }

  logout() {
    this.authService.logout();
  }
}
