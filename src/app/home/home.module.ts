import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [HomeComponent, CreateUserComponent, NewAnalysisComponent, ResultsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class HomeModule {}
