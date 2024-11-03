import { Component } from '@angular/core';
import {LoginComponentReactive} from "./auth/login-reactive/login.component.reactive";
import {SignupComponent} from "./auth/signup/signup.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponentReactive, SignupComponent],
})
export class AppComponent {}
