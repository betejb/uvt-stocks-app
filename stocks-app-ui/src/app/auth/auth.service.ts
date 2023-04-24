import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public logIn(payload: { email: string; password: string }) {
    let body: any = {
      email: payload.email,
      password: payload.password,
    };
    return this.httpClient.post(`${environment.apiUrl}/api/auth/login`, body);
  }

  public register(payload: {
    username: string;
    email: string;
    password: string;
    reTypePassword: string;
  }) {
    let body: any = {
      email: payload.email,
      username: payload.username,
      password: payload.password,
      reTypePassword: payload.reTypePassword,
    };
    return this.httpClient.post(
      `${environment.apiUrl}/api/auth/register`,
      body
    );
  }
}
