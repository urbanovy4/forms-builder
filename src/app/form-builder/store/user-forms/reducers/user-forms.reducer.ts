import {createReducer, on} from "@ngrx/store";
import {adapter, initialState} from "../states/user-forms.state";
import {getFormsSuccess} from "../actions/user-forms.action";

export const userFormsReducer = createReducer(initialState,
  on(getFormsSuccess, (state, {forms}) => {
    return adapter.setAll(forms, {...state});
  }),
);
