import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FormField } from '../../models/model';

type saveFormResponseDTO = {
  userId: number,
  fields: FormField[]
}

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    private http: HttpClient
  ) {
  }

  public getDefaultFields(): Observable<FormField[]> {
    return this.http.get<FormField[]>(`${this.apiUrl}/440/field-templates`);
  }

  public saveForm(fields: FormField[], userId: number, formName: string): Observable<saveFormResponseDTO> {
    return this.http.post<saveFormResponseDTO>(`${this.apiUrl}/660/saved-forms`, {userId, fields, formName});
  }
}
