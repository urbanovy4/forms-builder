import {createReducer, on} from "@ngrx/store";
import {IFormField} from "../../shared/models/model";
import * as UserActions from '../actions/user-forms.actions';

interface FormsResponse {
  userId: number;
  fields: IFormField[];
  id: number;
}

export interface IUserFormsState {
  forms: FormsResponse[]
}

const initialState: IUserFormsState = {
  forms: []
};

export const userFormsReducer = createReducer(initialState,
  on(UserActions.getFormsSuccess, (state, {forms}) => {
    return {
      ...state,
      forms
    }
  })
);
