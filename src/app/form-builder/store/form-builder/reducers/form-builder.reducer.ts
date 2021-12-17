import {createReducer, on} from "@ngrx/store";
import {initialState} from "../states/form-builder.state";
import * as FormEditActions from "./../actions/form-builder.action";

import {updateArray} from "../../../../helpers/utils/utils";


export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.getDefaultFieldsSuccess, (state, {defaultFields}) => {
    return {
      ...state,
      defaultFields
    }
  }),
  on(FormEditActions.getDefaultFieldsFailure, (state, {error}) => {
    return {
      ...state,
      error
    }
  }),
  on(FormEditActions.addField, (state, {field}) => {
    return {
      ...state,
      // fields: state.fields.concat(field)
    }
  }),
  on(FormEditActions.removeField, (state, {fields}) => {
    return {
      ...state,
      fields
    }
  }),
  on(FormEditActions.selectField, (state, {index}) => {
    return {
      ...state,
      // selectedField: state.fields[index],
      index
    }
  }),
  on(FormEditActions.deselectField, state => {
    return {
      ...state,
      selectedField: null
    }
  }),
  on(FormEditActions.getFormsSuccess, (state, {forms}) => {
    return {
      ...state,
      forms
    }
  }),
  on(FormEditActions.selectForm, (state, {selectedForm}) => {
    return {
      ...state,
      selectedForm
    }
  }),
  on(FormEditActions.clearFieldState, () => {
    return initialState;
  }),
  on(FormEditActions.changeStyle, (state, {styles, index}) => {
    return {
      ...state,
      selectedField: state.selectedField,
      // fields: updateArray(state.fields, index, styles)
    }
  }),
  on(FormEditActions.moveFieldInArray, (state, {fields}) => {
    return {
      ...state,
      fields
    }
  }),);
