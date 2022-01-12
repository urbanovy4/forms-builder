import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormField} from "../../../../../helpers/models/model";
import {merge, Observable, Subject} from "rxjs";
import {FormBuilderFacade} from "../../../../store/form-builder/facades/form-builder.facade";
import {Utils} from "../../../../../helpers/utils/utils";
import {bufferCount, take, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  @Input() fieldsLength: number = 0;

  formFieldList$: Observable<FormField[]>;
  formFieldList: FormField[] = [];
  selectedFieldIndex$: Observable<number>;
  removedFieldIndex$: Subject<number> = new Subject<number>();

  constructor(
    private formBuilderFacade: FormBuilderFacade,
  ) {
  }

  ngOnInit() {
    this.formFieldList$ = this.formBuilderFacade.fields$;
    this.selectedFieldIndex$ = this.formBuilderFacade.selectedFieldIndex$;
    this.getFieldsValue();
  }

  ngOnDestroy() {
    this.formBuilderFacade.unsubscribe();
  }

  onDrop(event: CdkDragDrop<any[]>) {
    this.dragItem(event);
  }

  private dragItem(event: CdkDragDrop<FormField[]>) {
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
    const formField = Utils.copy(field);
    this.formBuilderFacade.addField(formField);
  }

  private moveField(fields: FormField[]) {
    const formFields = Utils.copy(fields);
    this.formBuilderFacade.moveField(formFields);
  }

  selectField({field, index}) {
    this.formBuilderFacade.selectField({field, index});
  }

  updateIndex(index: number) {
    this.formBuilderFacade.updateIndex(index);
  }

  removeField(fields: FormField[]) {
    this.compareIndexes();
    this.formBuilderFacade.removeField(fields);
  }

  getRemovedFieldIndexValue(index: number) {
    this.removedFieldIndex$.next(index);
  }

  private compareIndexes() {
    merge(
      this.selectedFieldIndex$,
      this.removedFieldIndex$
    ).pipe(
      take(2),
      bufferCount(2, 2)
    ).subscribe(([selectedIndex, removedIndex]) => {
      this.checkToDeselect(selectedIndex, removedIndex);
    });
  }

  private checkToDeselect(selectedIndex: number, removedIndex: number) {
    if (selectedIndex === removedIndex) {
      this.formBuilderFacade.deselectField();
    }
  }

  private getFieldsValue() {
    this.formFieldList$
      .pipe(
        takeUntil(this.formBuilderFacade.notifyToUnsubscribe)
      )
      .subscribe((fields: FormField[]) => {
        this.formFieldList = Utils.copy(fields);
      });
  }
}
