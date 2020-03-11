import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/clients/components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'client/register',pathMatch: 'full' },
  { path: 'client/register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
