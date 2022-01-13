import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { State } from '../states/form-builder.state';
import { AvailableStyles, FormField } from '../../../../helpers/models/model';
import {
  addField,
  changeStyle,
  clearFormBuilderState,
  deselectField,
  moveFieldInArray,
  removeField,
  saveForm,
  selectField,
  showSaveDialog,
  updateIndex
} from '../actions/form-builder.action';
import { getAllFields, getSelectedField, getSelectedFieldIndex } from '../selectors/form-buider.selector';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderFacade {

  private notifyToUnsubscribe$: Subject<null> = new Subject<null>();
  readonly notifyToUnsubscribe: Observable<null> = this.notifyToUnsubscribe$.asObservable();

  public fields$: Observable<FormField[]> = this.store.pipe(select(getAllFields));
  public selectedField$: Observable<any> = this.store.pipe(select(getSelectedField));
  public selectedFieldIndex$: Observable<number> = this.store.pipe(select(getSelectedFieldIndex));

  constructor(
    private store: Store<State>
  ) {
  }

  /**
   * Deselect field
   */
  public deselectField(): void {
    this.store.dispatch(deselectField());
  }

  /**
   * Clear form builder state
   */
  public clearFormBuilderState(): void {
    this.store.dispatch(clearFormBuilderState());
  }

  /**
   * Add field
   * @param field Field
   */
  public addField(field: FormField): void {
    this.store.dispatch(addField({field}));
  }

  /**
   * Move field
   * @param fields Field
   */
  public moveField(fields: FormField[]): void {
    this.store.dispatch(moveFieldInArray({fields}));
  }

  /**
   * Select field
   * @param field FormField
   * @param index number
   */
  public selectField({field, index}): void {
    this.store.dispatch(selectField({field, index}))
  }

  /**
   * Update selected field index
   * @param index Number
   */
  public updateIndex(index: number): void {
    this.store.dispatch(updateIndex({index}));
  }

  /**
   * Remove field
   * @param fields FormField[]
   */
  public removeField(fields: FormField[]): void {
    this.store.dispatch(removeField({fields}))
  }

  /**
   * Change style
   * @param styles Styles
   * @param index number
   */
  public changeStyle(styles: AvailableStyles, index: number): void {
    this.store.dispatch(changeStyle({styles, index}))
  }

  /**
   * Show save dialog
   * @param fields FormField[]
   * @param userId number
   */
  public showSaveDialog(fields: FormField[], userId: number): void {
    this.store.dispatch(showSaveDialog({fields, userId}));
  }

  /**
   * Save Form
   * @param formName String
   * @param fields FormField[]
   * @param userId Number
   */
  public saveForm(formName: string, fields: FormField[], userId: number): void {
    this.store.dispatch(saveForm({formName, fields, userId}));
  }

  public unsubscribe(): void {
    this.notifyToUnsubscribe$.next(null);
  }

}
