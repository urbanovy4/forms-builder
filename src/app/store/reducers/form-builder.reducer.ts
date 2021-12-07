import {IFormField} from "../../shared/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/form-builder.actions';

export interface IFormBuilderState {
  fields: IFormField[]
}

export const initialState: IFormBuilderState = {
  fields: []
};

export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.addField, (state, event) => {
    return {
      ...state,
    }
  }),
);

export const featureSelector = createFeatureSelector<IFormBuilderState>('formBuilder');
export const formBuilderSelector = createSelector(
  featureSelector,
  state => state.fields
);
