import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserFormsService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private readonly apiUrl: string,
  ) {
  }

  getForms(userId: number) {
    return this.http.get(`${this.apiUrl}/660/saved-forms`, {
      params: {
        userId
      }
    });
  }
}
