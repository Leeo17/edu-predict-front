import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  public goToRecoverPage() {
    this.router.navigate(['/auth/send-recover-email']);
  }

  public submitLogin() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    this.authService
      .login(this.form.getRawValue())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe();
  }
}
