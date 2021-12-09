import {IFormField} from "../../shared/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/form-builder.actions';

export interface IFormBuilderState {
  fields: IFormField[],
  selectedField: IFormField
}

export const initialState: IFormBuilderState = {
  fields: [],
  selectedField: null
};

export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.selectField, (state, {selectedField}) => {
    return {
      ...state,
      selectedField
    }
  }),
  on(FormEditActions.deselectField, (state) => {
    return {
      ...state,
      selectedField: null
    }
  })
);

export const featureSelector = createFeatureSelector<IFormBuilderState>('formBuilder');
export const formBuilderSelector = createSelector(
  featureSelector,
  state => state.fields
);
