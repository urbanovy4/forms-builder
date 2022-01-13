import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { merge, Observable, Subject } from 'rxjs';
import { bufferCount, take, takeUntil } from 'rxjs/operators';

import { FormField } from '../../../../../helpers/models/model';
import { FormBuilderFacade } from '../../../../store/form-builder/facades/form-builder.facade';
import { Utils } from '../../../../../helpers/utils/utils';

@Component({
  selector: 'app-form-edit-area',
  templateUrl: './form-edit-area.component.html',
  styleUrls: ['./form-edit-area.component.scss', '../form-builder.component.scss']
})
export class FormEditAreaComponent implements OnInit, OnDestroy {

  @Input()
  public fieldsLength: number = 0;

  public formFieldList$: Observable<FormField[]>;
  public formFieldList: FormField[] = [];
  public selectedFieldIndex$: Observable<number>;
  public removedFieldIndex$: Subject<number> = new Subject<number>();

  constructor(
    private formBuilderFacade: FormBuilderFacade,
  ) {
  }

  public ngOnInit(): void {
    this.formFieldList$ = this.formBuilderFacade.fields$;
    this.selectedFieldIndex$ = this.formBuilderFacade.selectedFieldIndex$;
    this.getFieldsValue();
  }

  public ngOnDestroy(): void {
    this.formBuilderFacade.unsubscribe();
  }

  public onDrop(event: CdkDragDrop<any[]>): void {
    this.dragItem(event);
  }

  private dragItem(event: CdkDragDrop<FormField[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.moveField(event.container.data, event.currentIndex);
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

  private addField(field: FormField): void {
    const formField = Utils.copy(field);
    this.formBuilderFacade.addField(formField);
  }

  private moveField(fields: FormField[], index: number): void {
    const formFields = Utils.copy(fields);
    this.formBuilderFacade.moveField(formFields);
    this.formBuilderFacade.updateIndex(index);
  }

  public selectField({field, index}): void {
    this.formBuilderFacade.selectField({field, index});
  }

  public updateIndex(index: number): void {
    this.formBuilderFacade.updateIndex(index);
  }

  public removeField(fields: FormField[]): void {
    this.compareIndexes();
    this.formBuilderFacade.removeField(fields);
  }

  public getRemovedFieldIndexValue(index: number): void {
    this.removedFieldIndex$.next(index);
  }

  private compareIndexes(): void {
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

  private checkToDeselect(selectedIndex: number, removedIndex: number): void {
    if (selectedIndex === removedIndex) {
      this.formBuilderFacade.deselectField();
    }
  }

  private getFieldsValue(): void {
    this.formFieldList$
      .pipe(
        takeUntil(this.formBuilderFacade.notifyToUnsubscribe)
      )
      .subscribe((fields: FormField[]) => {
        this.formFieldList = Utils.copy(fields);
      });
  }
}
