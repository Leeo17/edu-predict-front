import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-recover-email',
  templateUrl: './send-recover-email.component.html',
  styleUrls: ['./send-recover-email.component.scss'],
})
export class SendRecoverEmailComponent {
  constructor(private router: Router) {}

  public goToResetPassword() {
    this.router.navigate(['/login/reset-password']);
  }

  public goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
