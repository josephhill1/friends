import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const ROUTES: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
