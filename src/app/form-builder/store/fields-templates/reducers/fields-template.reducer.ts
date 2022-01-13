import { createReducer, on } from '@ngrx/store';

import { adapter, initialState } from '../states/fields-template.state';
import * as FormEditActions from '../actions/fields-template.actions';

export const fieldsTemplateReducer = createReducer(initialState,
  on(FormEditActions.getDefaultFieldsSuccess, (state, {defaultFields}) => {
    return adapter.addMany(defaultFields, {...state});
  }),
  on(FormEditActions.getDefaultFieldsFailure, (state, {error}) => {
    return {
      ...state,
      error
    }
  })
);
