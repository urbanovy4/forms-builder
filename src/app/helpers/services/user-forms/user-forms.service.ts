import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Form, FormField } from '../../models/model';
import { Observable } from 'rxjs';

type editFormsResponseDTO = {
  id: number;
  userId: number;
  fields: FormField[];
}

@Injectable({
  providedIn: 'root'
})
export class UserFormsService {
  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    private http: HttpClient
  ) {
  }

  public getForms(userId: number): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.apiUrl}/660/saved-forms`, {
      params: {
        userId
      }
    });
  }

  public editForm(form: Form): Observable<editFormsResponseDTO> {
    return this.http.put<editFormsResponseDTO>(`${this.apiUrl}/660/saved-forms/${form.id}`, form);
  }

  public removeForm(formId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/660/saved-forms/${formId}`);
  }

}
