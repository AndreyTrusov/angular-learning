import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes("?")){
    return null;
  }

  return {doesNotContainsQuestionMark: true};
}

@Component({
  selector: 'app-login-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.reactive.html',
  styleUrl: './login.component.reactive.css',
})


export class LoginComponentReactive {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  })

  get emailIsInvalid() {
    return this.form.controls.email.invalid &&
      this.form.controls.email.touched &&
      this.form.controls.email.dirty;
  }

  get passwordIsInvalid() {
    return this.form.controls.password.invalid &&
      this.form.controls.password.touched &&
      this.form.controls.password.dirty;
  }

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, " / ", enteredPassword);
  }
}
