import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'new-analysis', pathMatch: 'prefix' },
      { path: 'new-analysis', component: NewAnalysisComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'create-user', component: CreateUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
