import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public logIn(email: string, password: string) {
    let body: any = {
      email: email,
      password: password,
    };
    return this.httpClient
      .post(`${environment.apiUrl}/api/auth/login`, body)
      .toPromise();
  }

  public register(
    username: string,
    email: string,
    password: string,
    reTypePassword: string
  ) {
    let body: any = {
      email: email,
      username: username,
      password: password,
      reTypePassword: reTypePassword,
    };
    return this.httpClient
      .post(`${environment.apiUrl}/api/auth/register`, body)
      .toPromise();
  }
}
