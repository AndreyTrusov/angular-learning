import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

function equalPasswords(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    return null;
  }

  return {passwordsNotEqual: true};
}

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if (val1 === val2) {
      return null;
    }

    return {valuesNotEqual: true};
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [
    ReactiveFormsModule
  ]
})

export class SignupComponent {
  form = new FormGroup({
    email: new FormControl("", {validators: [Validators.required, Validators.email]}),
    passwords: new FormGroup({
        password: new FormControl("", {validators: [Validators.required, Validators.minLength(6)]}),
        confirmPassword: new FormControl("", {validators: [Validators.required, Validators.minLength(6)]}),
      }, {
        validators: [equalValues('password', 'confirmPassword')],
      }
    ),
    firstName: new FormControl("", {validators: [Validators.required, Validators.minLength(3)]}),
    lastName: new FormControl("", {validators: [Validators.required, Validators.minLength(3)]}),
    address: new FormGroup({
      street: new FormControl("", {validators: [Validators.required]}),
      number: new FormControl(""),
      postalCode: new FormControl("", {validators: [Validators.minLength(5)]}),
      city: new FormControl("", {validators: [Validators.required]}),
    }),
    role: new FormControl<"Student" | "Teacher" | "Employee" | "Founder" | "Other">("Student", {validators: [Validators.required]}),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ]),
    agree: new FormControl(false, {validators: [Validators.required]}),
  })

  get passwordIsInvalid() {
    return this.form.controls.passwords.controls.password.invalid &&
      this.form.controls.passwords.controls.password.touched &&
      this.form.controls.passwords.controls.password.dirty;
  }

  get confirmPasswordIsInvalid() {
    return this.form.controls.passwords.controls.confirmPassword.invalid &&
      this.form.controls.passwords.controls.confirmPassword.touched &&
      this.form.controls.passwords.controls.confirmPassword.dirty;
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log("INVALID FORM");
      return;
    }
    // const enteredEmail = this.form.value.email;
    // const enteredPassword = this.form.value.passwords?.password;
    console.log(this.form);
  }
}
