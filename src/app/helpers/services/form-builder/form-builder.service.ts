import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormField} from "../../models/model";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    private http: HttpClient
  ) {
  }


  getDefaultFields(): Observable<FormField[]> {
    return this.http.get<FormField[]>(`${this.apiUrl}/440/field-templates`);
  }

  saveForm(fields: FormField[], userId: number, formName: string) {
    return this.http.post(`${this.apiUrl}/660/saved-forms`, {userId, fields, formName});
  }
}
