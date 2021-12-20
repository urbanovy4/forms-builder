import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserFormsService {
  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    private http: HttpClient
  ) {
  }

  getForms(userId: number) {
    return this.http.get(`${this.apiUrl}/660/saved-forms`, {
      params: {
        userId
      }
    });
  }

  removeForm(formId: number) {
    return this.http.delete(`${this.apiUrl}/660/saved-forms/${formId}`);
  }

}
