import {createReducer, on} from "@ngrx/store";
import {adapter, initialState} from "../states/user-forms.state";
import {
  editFormFailure,
  editFormSuccess,
  getFormsSuccess,
  removeFormFailure,
  removeFormSuccess
} from "../actions/user-forms.action";

export const userFormsReducer = createReducer(initialState,
  on(getFormsSuccess, (state, {forms}) => {
    return adapter.setAll(forms, {...state});
  }),
  on(removeFormSuccess, (state, {formId}) => {
    return adapter.removeOne(formId, {...state});
  }),
  on(removeFormFailure, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
  on(editFormSuccess, (state, {form}) => {
    return adapter.updateOne(
      {id: form.id, changes: form},
      {...state}
    );
  }),
  on(editFormFailure, (state, {error}) => {
    return {
      ...state,
      error
    }
  })
);
