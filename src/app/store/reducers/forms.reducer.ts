import {Form, FormField} from "../../helpers/models/model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as FormEditActions from '../actions/forms.actions';
import {updateArray} from "../../helpers/utils/utils";
import {createEntityAdapter} from "@ngrx/entity";

export interface FormBuilderState {
  fields: FormField[],
  selectedField: FormField,
  index: number,
  forms: Form[],
  selectedForm: Form
}

export const initialState: FormBuilderState = {
  fields: [],
  selectedField: null,
  index: null,
  forms: [],
  selectedForm: null
};


export const formsReducer = createReducer(initialState,
  // on(FormEditActions.addField, (state, {field}) => {
  //   return {
  //     ...state,
  //     fields: state.fields.concat(field)
  //   }
  // }),
  // on(FormEditActions.removeField, (state, {fields}) => {
  //   return {
  //     ...state,
  //     fields
  //   }
  // }),
  // on(FormEditActions.selectField, (state, {index}) => {
  //   return {
  //     ...state,
  //     selectedField: state.fields[index],
  //     index
  //   }
  // }),
  // on(FormEditActions.deselectField, state => {
  //   return {
  //     ...state,
  //     selectedField: null
  //   }
  // }),
  // on(FormEditActions.getFormsSuccess, (state, {forms}) => {
  //   return {
  //     ...state,
  //     forms
  //   }
  // }),
  // on(FormEditActions.selectForm, (state, {selectedForm}) => {
  //   return {
  //     ...state,
  //     selectedForm
  //   }
  // }),
  // on(FormEditActions.clearFieldState, () => {
  //   return initialState;
  // }),
  // on(FormEditActions.changeStyle, (state, {styles, index}) => {
  //   return {
  //     ...state,
  //     selectedField: state.selectedField,
  //     fields: updateArray(state.fields, index, styles)
  //   }
  // }),
  // on(FormEditActions.moveFieldInArray, (state, {fields}) => {
  //   return {
  //     ...state,
  //     fields
  //   }
  // }),
);


