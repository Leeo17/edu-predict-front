import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserPassInput } from '../../shared/interfaces';
import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: [''],
        verificationCode: ['', [Validators.required]],
      },
      { validator: this.checkPasswords }
    );
  }

  public submitPassword() {
    if (!this.form.valid) {
      return;
    }

    const passInput: UserPassInput = {
      senha: this.form.value.password,
      confirmar_senha: this.form.value.confirmPassword,
      codigo_verificacao: this.form.value.verificationCode,
    };

    this.authService.createUserPassword(passInput).subscribe((res) => {
      if (res) {
        this.form.reset();
        Object.keys(this.form.controls).forEach((key) => {
          this.form.get(key)?.setErrors(null);
          this.form.get(key)?.markAsPristine();
          this.form.get(key)?.markAsUntouched();
        });
      }
    });
  }

  public goToLoginPage() {
    this.router.navigate(['/auth/login']);
  }
}
