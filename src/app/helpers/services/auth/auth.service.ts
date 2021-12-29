import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserResponse, User} from "../../models/model";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = null;

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private readonly apiUrl: string,
  ) {
  }

  login(user: User): Observable<{ accessToken: string, userId: number }> {
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

  register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, user);
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
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return !!this.token;
  }

}
