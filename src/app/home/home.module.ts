import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
})
export class HomeModule {}
