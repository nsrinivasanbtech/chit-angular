import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './components/admin/admin.guard';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from '../app/components/patient/patient.component';
import { DetailsResolver } from './resolvers/details.resolver';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: PatientComponent, canActivate: [AdminGuard], resolve: {data: DetailsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
