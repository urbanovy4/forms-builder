import {createReducer, on} from "@ngrx/store";
import {Form} from "../../shared/models/model";
import * as UserActions from '../actions/user-forms.actions';

export interface IUserFormsState {
  forms: Form[],
  selectedForm: Form
}

const initialState: IUserFormsState = {
  forms: [],
  selectedForm: null
};

export const userFormsReducer = createReducer(initialState,
  on(UserActions.getFormsSuccess, (state, {forms}) => {
    return {
      ...state,
      forms
    }
  }),
  on(UserActions.selectForm, (state, {selectedForm}) => {
    return {
      ...state,
      selectedForm
    }
  })
);
