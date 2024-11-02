import { Component } from '@angular/core';
import {LoginComponentReactive} from "./auth/login-reactive/login.component.reactive";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponentReactive],
})
export class AppComponent {}
