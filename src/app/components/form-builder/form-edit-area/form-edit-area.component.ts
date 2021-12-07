import {Component} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {IFormField} from "../../../shared/models/model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {formBuilderSelector} from "../../../store/reducers/form-builder.reducer";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent {

  formFieldList: Observable<IFormField[]> = this.store.select(formBuilderSelector);


  constructor(
    private store: Store,
  ) {
  }

  onDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // this.store.dispatch(addField({field: event.item.data}));
  }

  selectField(field) {

  }
}
