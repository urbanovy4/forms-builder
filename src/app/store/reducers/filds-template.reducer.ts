import {FormField} from "../../helpers/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/forms.actions';

export interface IFormTemplateState {
  defaultFields: FormField[],
  error: string
}

export const initialState: IFormTemplateState = {
  defaultFields: [],
  error: null
};

export const fildsTemplateReducer = createReducer(initialState,
  // on(FormEditActions.getDefaultFieldsSuccess, (state, {defaultFields}) => {
  //   return {
  //     ...state,
  //     defaultFields
  //   }
  // }),
  // on(FormEditActions.getDefaultFieldsFailure, (state, {error}) => {
  //   return {
  //     ...state,
  //     error
  //   }
  // })
);

export const featureSelector = createFeatureSelector<IFormTemplateState>('fieldsTemplates');
export const authSelector = createSelector(
  featureSelector,
  state => state.defaultFields
);
