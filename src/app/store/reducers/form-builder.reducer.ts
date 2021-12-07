import {IFormField} from "../../shared/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/form-edit.action';

export interface IFormBuilderState {
  defaultFields: IFormField[],
}

export const initialState: IFormBuilderState = {
  defaultFields: []
};


export const formBuilderReducer = createReducer(initialState,
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

export const featureSelector = createFeatureSelector<IFormBuilderState>('formBuilder');
export const authSelector = createSelector(
  featureSelector,
  state => state.defaultFields
);
