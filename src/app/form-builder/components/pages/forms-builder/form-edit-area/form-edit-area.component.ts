import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormField} from "../../../../../helpers/models/model";
import {Observable, Subscription} from "rxjs";
import {FormBuilderFacade} from "../../../../store/form-builder/facades/form-builder.facade";
import {copy} from "../../../../../helpers/utils/utils";

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  @Input() fieldsLength: number = 0;

  private subscription: Subscription = new Subscription();

  formFieldList$: Observable<FormField[]>;
  formFieldList: FormField[] = [];
  selectedField$: Observable<FormField>;
  selectedField: FormField;

  constructor(
    private formBuilderFacade: FormBuilderFacade
  ) {
  }

  ngOnInit() {
    this.formFieldList$ = this.formBuilderFacade.fields$;
    this.selectedField$ = this.formBuilderFacade.selectedField$;
    // this.getFieldsValue();
    this.getSelectedFieldValue();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDrop(event: CdkDragDrop<FormField[]>) {
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
    const formField = copy(field);
    this.formBuilderFacade.addField(formField);
  }

  private moveField(fields: FormField[]) {
    const formFields = copy(fields);
    this.formBuilderFacade.moveField(formFields);
  }

  selectField({field, index}) {
    this.formBuilderFacade.selectField({field, index});
  }

  removeField(fields: FormField[]) {
    const formFields = [...fields];
    this.formBuilderFacade.removeField(formFields);
  }

  private getFieldsValue() {
    this.subscription.add(
      this.formFieldList$.subscribe((fields: FormField[]) => {
        this.formFieldList = copy(fields);
      })
    );
  }

  private getSelectedFieldValue() {
    this.subscription.add(
      this.selectedField$.subscribe(field => {
        this.selectedField = field;
      })
    );
  }

}
