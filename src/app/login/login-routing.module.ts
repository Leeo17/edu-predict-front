import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendRecoverEmailComponent } from './send-recover-email/send-recover-email.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'send-recover-email', component: SendRecoverEmailComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
