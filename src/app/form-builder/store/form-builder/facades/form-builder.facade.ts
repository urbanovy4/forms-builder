import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {State} from "../states/form-builder.state";
import {
  addField,
  changeStyle,
  moveFieldInArray,
  removeField,
  saveForm,
  selectField,
  showSaveDialog
} from "../actions/form-builder.action";
import {AvailableStyles, FormField} from "../../../../helpers/models/model";
import {deselectField} from "../../../../store/actions/forms.actions";
import {Observable} from "rxjs";
import {fields, selectedField, selectedFieldIndex} from "../selectors/form-buider.selector";

@Injectable({
  providedIn: "root"
})
export class FormBuilderFacade {

  fields$: Observable<FormField[]> = this.store.pipe(select(fields));
  selectedField$: Observable<FormField> = this.store.pipe(select(selectedField));
  selectedFieldIndex$: Observable<number> = this.store.pipe(select(selectedFieldIndex));

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

  selectField({ field, index }) {
    this.store.dispatch(selectField({field, index}))
  }

  /**
   * Remove field
   * @param fields FormField[]
   */

  removeField(fields: FormField[]) {
    // if (deselectCondition) {
      this.deselectField();
    // }
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
   */

  showSaveDialog({fields, userId}) {
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

}
