import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send-recover-email',
  templateUrl: './send-recover-email.component.html',
  styleUrls: ['./send-recover-email.component.scss'],
})
export class SendRecoverEmailComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public goToLoginPage() {
    this.router.navigate(['/auth/login']);
  }

  public sendEmail() {
    if (!this.form.valid) {
      return;
    }

    this.authService.sendResetPasswordEmail(this.form.value.email).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: () => this.form.reset(),
    });
  }
}
