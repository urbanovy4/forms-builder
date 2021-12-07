import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFormField} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    private http: HttpClient
  ) { }


  getDefaultFields(): Observable<IFormField[]> {
    return this.http.get<IFormField[]>(`${this.apiUrl}/440/field-templates`);
  }
}
