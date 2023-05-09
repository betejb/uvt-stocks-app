import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserModel = {
    username: 'John Doe',
    email: 'john.doe@email.com',
  };

  constructor() {}

  public setUser(user: UserModel): void {
    this.user = user;
  }

  public getUser(): UserModel {
    return this.user;
  }
}
