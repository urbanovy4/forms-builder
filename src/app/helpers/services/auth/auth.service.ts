import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserResponse, User } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = null;
  //For test
  private loggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private readonly apiUrl: string,
  ) {
    //For test
    this.loggedInState = JSON.parse(localStorage.getItem('loginState'));
  }

  public get loggedInState(): boolean {
    return this.loggedIn;
  }

  public set loggedInState(state: boolean) {
    this.loggedIn = state;
  }

  public login(user: User): Observable<{ accessToken: string, userId: number }> {
    return this.http.post<UserResponse>(`${this.apiUrl}/login`, user)
      .pipe(
        map(res => {
          return {
            accessToken: res.accessToken,
            userId: res.user.id
          }
        })
      );
  }

  public register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, user);
  }

  public signOut(): void {
    this.token = null;
    this.loggedInState = false;
    localStorage.clear();
  }

  public getToken(): string {
    return this.token;
  }

  public setUserId(userId: number): void {
    localStorage.setItem('userId', userId + '');
  }

  public setToken(accessToken: string): void {
    this.token = accessToken;
    this.loggedInState = true;
    localStorage.setItem('token', accessToken);
    //For test
    localStorage.setItem('loginState', String(this.loggedInState));
  }

}
