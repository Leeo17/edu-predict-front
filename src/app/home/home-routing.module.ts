import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-user', pathMatch: 'prefix' },
  { path: 'create-user', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
