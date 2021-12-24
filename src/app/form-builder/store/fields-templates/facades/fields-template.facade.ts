import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FormField} from "../../../../helpers/models/model";
import {select, Store} from "@ngrx/store";
import {defaultFields} from "../selectors/fields-template.selector";
import {getDefaultFields} from "../actions/fields-template.actions";

@Injectable({
  providedIn: 'root'
})
export class FieldsTemplateFacade {

  defaultFields$: Observable<FormField[]> = this.store.pipe(select(defaultFields));

  constructor(
    private store: Store
  ) {
  }
  
  /**
   * Get default fields
   */
  getDefaultFields() {
    this.store.dispatch(getDefaultFields());
  }
}
