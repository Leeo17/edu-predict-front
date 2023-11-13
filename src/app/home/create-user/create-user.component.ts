import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserInput } from '../../shared/interfaces';
import { HomeService } from '../home.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  form!: FormGroup;
  passwordForm!: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {}

  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.passwordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: [''],
      },
      { validator: this.checkPasswords }
    );
  }

  public submitUser() {
    if (!this.form.valid || !this.passwordForm.valid) {
      return;
    }

    const userInput: UserInput = {
      email: this.form.value.email,
      nome: this.form.value.firstName,
      sobrenome: this.form.value.lastName,
      senha: this.passwordForm.value.password,
    };

    this.homeService.createUser(userInput).subscribe((res) => {
      if (res) {
        this.form.reset();
        Object.keys(this.form.controls).forEach((key) => {
          this.form.get(key)?.setErrors(null);
          this.form.get(key)?.markAsPristine();
          this.form.get(key)?.markAsUntouched();
        });

        this.passwordForm.reset();
        Object.keys(this.passwordForm.controls).forEach((key) => {
          this.passwordForm.get(key)?.setErrors(null);
          this.passwordForm.get(key)?.markAsPristine();
          this.passwordForm.get(key)?.markAsUntouched();
        });
      }
    });
  }
}
