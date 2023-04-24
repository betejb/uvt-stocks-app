import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    reTypePassword: new FormControl('', [Validators.required]),
  });

  viewType: string = 'login';

  constructor(private authService: AuthService, private router: Router) {}

  onViewTypeChange(viewType: string): void {
    console.log('viewType: ' + viewType);
    this.viewType = viewType;
  }

  onLogIn(): void {
    console.log(this.loginForm.value);

    this.authService.logIn(this.loginForm.value).subscribe(
      (response: any) => {
        console.log('Login with success!');

        console.log(response);

        this.router.navigate(['/', 'dashboard']);
      },
      (err) => {
        console.log('Login with failed!');
        console.log(err);
      }
    );
  }

  onRegister(): void {
    console.log(this.registerForm.value);

    this.authService.logIn(this.registerForm.value).subscribe(
      (response: any) => {
        console.log('Register with success!');

        this.viewType = 'login';
        this.resetLoginForm();

        console.log(response);
      },
      (err) => {
        console.log('Register with failed!');
        console.log(err);
      }
    );
  }

  getErrorMessage(formControl: any) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return formControl.hasError('email') ? 'Not a valid email' : '';
  }

  private resetLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  private resetRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      reTypePassword: new FormControl('', [Validators.required]),
    });
  }
}
