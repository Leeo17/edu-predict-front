import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../shared/services/api.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';

@NgModule({
  declarations: [SubmitButtonComponent, ConfirmDialogComponent],
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule, MatDialogModule],
  exports: [SubmitButtonComponent],
  providers: [ApiService],
})
export class SharedModule {}
