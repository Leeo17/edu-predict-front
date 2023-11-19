import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { UserInput } from '../../shared/interfaces';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public submitUser() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    const userInput: UserInput = {
      email: this.form.value.email,
      nome: this.form.value.firstName,
      sobrenome: this.form.value.lastName,
    };

    this.homeService
      .createUser(userInput)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
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
}
