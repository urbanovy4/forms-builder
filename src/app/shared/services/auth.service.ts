import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateResponse, Token, User} from "../models/model";
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

  login(user: User): Observable<string> {
    return this.http.post<Token>(`${this.apiUrl}/login`, user)
      .pipe(
        map(({accessToken}) => accessToken)
      )
  }

  register(user: User): Observable<CreateResponse> {
    return this.http.post<CreateResponse>(`${this.apiUrl}/register`, user);
  }

  signOut() {
    this.token = null;
    localStorage.clear();
  }

  setToken(accessToken: string) {
    this.token = accessToken;
    localStorage.setItem('token', accessToken);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}
