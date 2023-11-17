import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../shared/services/api.service';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';

@NgModule({
  declarations: [SubmitButtonComponent],
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule],
  exports: [SubmitButtonComponent],
  providers: [ApiService],
})
export class SharedModule {}
