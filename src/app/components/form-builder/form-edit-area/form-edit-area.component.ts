import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {IFormField} from "../../../shared/models/model";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {AppState} from "../../../store/app.state";
import {selectField} from "../../../store/actions/form-builder.actions";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  formFieldList: IFormField[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
  }

  selectField(selectedField: IFormField) {
    this.store.dispatch(selectField({selectedField}));
  }
}
