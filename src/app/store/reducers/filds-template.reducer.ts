import {IFormField} from "../../shared/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/form-builder.actions';

export interface IFormTemplateState {
  defaultFields: IFormField[],
}

export const initialState: IFormTemplateState = {
  defaultFields: []
};


export const fildsTemplateReducer = createReducer(initialState,
  on(FormEditActions.getDefaultFieldsSuccess, (state, {defaultFields}) => {
    return {
      ...state,
      defaultFields
    }
  }),
  on(FormEditActions.getDefaultFieldsFailure, (state, error) => {
    return {
      ...state,
    }
  })
);

export const featureSelector = createFeatureSelector<IFormTemplateState>('fieldsTemplates');
export const authSelector = createSelector(
  featureSelector,
  state => state.defaultFields
);
