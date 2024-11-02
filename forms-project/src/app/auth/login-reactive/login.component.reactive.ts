import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, of} from "rxjs";

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes("?")) {
    return null;
  }

  return {doesNotContainsQuestionMark: true};
}

function emailIsUniqueDummy(control: AbstractControl) {
  if (control.value !== 'test@gmail.com') {
    return of(null);
  }

  return of({notUnique: true});
}

let initialEmailValue = "";
const savedForm = window.localStorage.getItem('saved-login-form');

if (savedForm) {
  const loadedFormData = JSON.parse(savedForm);
  initialEmailValue = loadedFormData.email;
}

@Component({
  selector: 'app-login-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.reactive.html',
  styleUrl: './login.component.reactive.css',
})


export class LoginComponentReactive implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUniqueDummy]
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

  ngOnInit() {
    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({
            email: value.email
          }
        ));
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, " / ", enteredPassword);
  }
}
