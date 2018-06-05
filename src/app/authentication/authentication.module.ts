import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from '../services/authentication.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule, MaterialModule],
  declarations: [LoginComponent, SignupComponent],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
