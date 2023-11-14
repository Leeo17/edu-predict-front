import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent {
  constructor(private router: Router) {}

  public goToLoginPage() {
    this.router.navigate(['/auth/login']);
  }
}
