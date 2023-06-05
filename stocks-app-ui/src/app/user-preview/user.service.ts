import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserModel = {
    username: 'John Doe',
    email: 'john.doe@email.com',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0hLwdzwhC7R2B2pn7e9-YYqpSiTQsZMDDA&usqp=CAU',
  };

  constructor() {}

  public setUser(user: UserModel): void {
    this.user = user;
  }

  public getUser(): UserModel {
    return this.user;
  }
}
