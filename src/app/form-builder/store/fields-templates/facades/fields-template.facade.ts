import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FormField } from '../../../../helpers/models/model';
import { defaultFields } from '../selectors/fields-template.selector';
import { getDefaultFields } from '../actions/fields-template.actions';

@Injectable({
  providedIn: 'root'
})
export class FieldsTemplateFacade {

  public defaultFields$: Observable<FormField[]> = this.store.pipe(select(defaultFields));

  constructor(
    private store: Store
  ) {
  }

  /**
   * Get default fields
   */
  public getDefaultFields(): void {
    this.store.dispatch(getDefaultFields());
  }
}
