import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {IFormField} from "../../../shared/models/model";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {AppState} from "../../../store/app.state";
import {
  addField,
  deselectField,
  moveFieldInArray,
  removeField,
  selectField
} from "../../../store/actions/fields.actions";
import {copy} from "../../../shared/utils/utils";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  formFieldList$: Observable<IFormField[]> = this.store.select<IFormField[]>(state => state.formBuilder.fields);
  formFieldList: IFormField[] = [];

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

  private addField(field: IFormField) {
    this.store.dispatch(addField({field}));
  }

  private moveField(fields: IFormField[]) {
    const fieldsCopy = [...fields];
    this.store.dispatch(moveFieldInArray({fields: fieldsCopy}));
  }

  selectField(index: number) {
    this.store.dispatch(selectField({index}));
  }

  removeField(fields: IFormField[]) {
    this.store.dispatch(removeField({fields}));
  }

}
