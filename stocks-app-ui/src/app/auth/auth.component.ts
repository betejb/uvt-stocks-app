import { UserService } from './../user-preview/user.service';
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

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  onViewTypeChange(viewType: string): void {
    this.viewType = viewType;
  }

  onLogIn(): void {
    this.authService.logIn(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.message != 'Bad credentials!') {
          console.log('Login with success!');

          this.userService.setUser({
            email: response.data[0].email,
            username: response.data[0].username,
            imageUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0hLwdzwhC7R2B2pn7e9-YYqpSiTQsZMDDA&usqp=CAU',
          });

          console.log(this.userService.getUser());

          this.resetLoginForm();

          this.router.navigate(['/', 'dashboard']);
        } else {
          alert(response.message);
        }
      },
      (err) => {
        console.log('Login with failed!');
        alert('Invalid credentials!');
        console.log(err);
      }
    );
  }

  onRegister(): void {
    if (
      this.registerForm.value.password != this.registerForm.value.reTypePassword
    ) {
      alert('Passwords do not match!');
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        (response: any) => {
          console.log('Register with success!');

          this.viewType = 'login';
          this.resetRegisterForm();

          console.log(response);
        },
        (err) => {
          console.log('Register with failed!');
          console.log(err);
        }
      );
    }
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
