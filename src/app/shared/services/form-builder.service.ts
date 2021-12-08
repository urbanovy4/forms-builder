import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFormField} from "../models/model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

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

  addField(field?: CdkDragDrop<any>) {

    // event = Object.assign(event);
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // } else {
    //   copyArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // }
  }

  saveForm() {

  }
}
