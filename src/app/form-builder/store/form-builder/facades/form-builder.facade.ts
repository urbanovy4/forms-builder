import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {State} from "../states/form-builder.state";
import {addField, moveFieldInArray, removeField, selectField} from "../actions/form-builder.action";
import {Observable} from "rxjs";
import {AvailableStyles, Form, FormField} from "../../../../helpers/models/model";
import {
  fields,
  forms,
  selectedField,
  selectedFieldIndex,
  selectedForm
} from "../selectors/form-buider.selector";
import {deselectField} from "../../../../store/actions/forms.actions";

@Injectable({
  providedIn: "root"
})
export class FormBuilderFacade {

  fields$: Observable<FormField[]> = this.store.pipe(select(fields));
  // selectedField$: Observable<FormField> = this.store.pipe(select(selectedField));
  // forms$: Observable<Form[]> = this.store.pipe(select(forms));
  // selectedForm$: Observable<Form> = this.store.pipe(select(selectedForm));
  // selectedFieldIndex$: Observable<number> = this.store.pipe(select(selectedFieldIndex));

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
    this.store.dispatch(addField({field}))
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
   * @param index Index
   */

  selectField(index: number) {
    this.store.dispatch(selectField({index}))
  }

  /**
   * Remove field
   * @param id Id
   */

  removeField(id: number) {
    this.store.dispatch(removeField({id}))
  }

  /**
   * Change style
   * @param styles Styles
   */

  changeStyle(styles: AvailableStyles) {

  }

}
