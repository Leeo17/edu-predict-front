import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateUserComponent } from './create-user/create-user.component';
import { ExportComponent } from './export/export.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [HomeComponent, CreateUserComponent, NewAnalysisComponent, ResultsComponent, ExportComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [],
})
export class HomeModule {}
