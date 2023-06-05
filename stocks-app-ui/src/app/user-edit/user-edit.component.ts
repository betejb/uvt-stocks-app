import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user-preview/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
  @Output() updateUser: EventEmitter<any> = new EventEmitter();
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private router: Router) {
    this.resetRegisterForm();
  }

  onSave(): void {
    console.log(this.userForm.value);

    this.userService.setUser({
      username: this.userForm.value.username,
      email: this.userService.getUser().email,
      imageUrl: this.userForm.value.imageUrl,
    });

    this.updateUser.emit();
  }

  getErrorMessage(formControl: any) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return formControl.hasError('email') ? 'Not a valid email' : '';
  }

  private resetRegisterForm() {
    this.userForm = new FormGroup({
      username: new FormControl(this.userService.getUser().username, [
        Validators.required,
      ]),
      imageUrl: new FormControl('', [Validators.required]),
    });
  }
}
