import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormField} from "../../../../../helpers/models/model";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {AppState} from "../../../../../store/states/app.state";
import {
  addField,
  deselectField,
  moveFieldInArray,
  removeField,
  selectField
} from "../../../../../store/actions/forms.actions";
import {copy} from "../../../../../helpers/utils/utils";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  // formFieldList$: Observable<FormField[]> = this.store.select<FormField[]>(state => state.formBuilder.fields);
  formFieldList$: Observable<FormField[]>
  formFieldList: FormField[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.subscription.add(
      this.formFieldList$.subscribe(fields => {
        this.formFieldList = copy(fields);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDrop(event: CdkDragDrop<any>) {
    this.dragItem(event);
  }

  private dragItem(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.moveField(event.container.data);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.addField(event.item.data);
    }
  }

  private addField(field: FormField) {
    this.store.dispatch(addField({field}));
  }

  private moveField(fields: FormField[]) {
    const fieldsCopy = [...fields];
    this.store.dispatch(moveFieldInArray({fields: fieldsCopy}));
  }

  selectField(index: number) {
    this.store.dispatch(selectField({index}));
  }

  removeField(fields: FormField[]) {
    this.store.dispatch(removeField({fields}));
  }

}
