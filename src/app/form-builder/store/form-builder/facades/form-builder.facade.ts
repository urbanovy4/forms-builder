import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {State} from "../states/form-builder.state";
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
} from "../actions/form-builder.action";
import {AvailableStyles, FormField} from "../../../../helpers/models/model";
import {Observable, Subject} from "rxjs";
import {getAllFields, getSelectedField, getSelectedFieldIndex} from "../selectors/form-buider.selector";

@Injectable({
  providedIn: "root"
})
export class FormBuilderFacade {

  private notifyToUnsubscribe$: Subject<null> = new Subject<null>();
  readonly notifyToUnsubscribe: Observable<null> = this.notifyToUnsubscribe$.asObservable();

  fields$: Observable<FormField[]> = this.store.pipe(select(getAllFields));
  selectedField$: Observable<any> = this.store.pipe(select(getSelectedField));
  selectedFieldIndex$: Observable<number> = this.store.pipe(select(getSelectedFieldIndex));

  constructor(
    private store: Store<State>
  ) {
  }

  /**
   * Deselect field
   */
  deselectField() {
    this.store.dispatch(deselectField());
  }

  /**
   * Clear form builder state
   */
  clearFormBuilderState() {
    this.store.dispatch(clearFormBuilderState());
  }

  /**
   * Add field
   * @param field Field
   */
  addField(field: FormField) {
    this.store.dispatch(addField({field}));
  }

  /**
   * Move field
   * @param fields Field
   */
  moveField(fields: FormField[]) {
    this.store.dispatch(moveFieldInArray({fields}));
  }

  /**
   * Select field
   * @param field FormField
   * @param index number
   */
  selectField({field, index}) {
    this.store.dispatch(selectField({field, index}))
  }

  /**
   * Update selected field index
   * @param index Number
   */
  updateIndex(index: number) {
    this.store.dispatch(updateIndex({index}));
  }

  /**
   * Remove field
   * @param fields FormField[]
   */
  removeField(fields: FormField[]) {
    this.store.dispatch(removeField({fields}))
  }

  /**
   * Change style
   * @param styles Styles
   * @param index number
   */
  changeStyle(styles: AvailableStyles, index: number) {
    this.store.dispatch(changeStyle({styles, index}))
  }

  /**
   * Show save dialog
   * @param fields FormField[]
   * @param userId number
   */
  showSaveDialog(fields: FormField[], userId: number) {
    this.store.dispatch(showSaveDialog({fields, userId}));
  }

  /**
   * Save Form
   * @param formName String
   * @param fields FormField[]
   * @param userId Number
   */
  saveForm(formName: string, fields: FormField[], userId: number) {
    this.store.dispatch(saveForm({formName, fields, userId}));
  }

  unsubscribe() {
    this.notifyToUnsubscribe$.next(null);
  }

}
