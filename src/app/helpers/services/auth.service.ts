import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICreateResponse, IToken, IUser} from "../models/model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = null;

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private readonly apiUrl: string
  ) {
  }

  login(user: IUser): Observable<ICreateResponse> {
    return this.http.post<ICreateResponse>(`${this.apiUrl}/login`, user);
  }

  register(user: IUser): Observable<ICreateResponse> {
    return this.http.post<ICreateResponse>(`${this.apiUrl}/register`, user);
  }

  signOut() {
    this.token = null;
    localStorage.clear();
  }

  getToken(): string {
    return this.token;
  }

  setUserId(userId: number) {
    localStorage.setItem('userId', userId + '');
  }

  setToken(accessToken: string) {
    this.token = accessToken;
    localStorage.setItem('token', accessToken);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}
