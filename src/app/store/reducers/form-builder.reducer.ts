import {IFormField} from "../../shared/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/form-builder.actions';
import {updateArray} from "../../shared/utils/utils";

export interface IFormBuilderState {
  fields: IFormField[],
  selectedField: IFormField,
  index: number
}

export const initialState: IFormBuilderState = {
  fields: [],
  selectedField: null,
  index: null
};

export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.addField, (state, {field}) => {
    return {
      ...state,
      fields: state.fields.concat(field)
    }
  }),
  on(FormEditActions.selectField, (state, {index}) => {
    return {
      ...state,
      selectedField: state.fields[index],
      index
    }
  }),
  on(FormEditActions.deselectField, (state) => {
    return {
      ...state,
      selectedField: null
    }
  }),
  on(FormEditActions.changeStyle, (state, {styles, index}) => {
    return {
      ...state,
      selectedField: state.selectedField,
      fields: updateArray(state.fields, index, styles)
    }
  }),
  on(FormEditActions.moveFieldInArray, (state, {fields}) => {
    return {
      ...state,
      fields
    }
  }),
);

export const featureSelector = createFeatureSelector<IFormBuilderState>('formBuilder');
export const formBuilderSelector = createSelector(
  featureSelector,
  state => state.fields
);
