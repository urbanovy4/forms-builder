import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Form} from "../../models/model";

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

  editForm(form: Form) {
    return this.http.put(`${this.apiUrl}/660/saved-forms/${form.id}`, form);
  }

  removeForm(formId: number) {
    return this.http.delete(`${this.apiUrl}/660/saved-forms/${formId}`);
  }

}
