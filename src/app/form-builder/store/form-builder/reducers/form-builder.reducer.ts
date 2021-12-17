import {createReducer, on} from "@ngrx/store";
import {adapter, initialState} from "../states/form-builder.state";
import * as FormEditActions from "./../actions/form-builder.action";

export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.addField, (state, {field}) => {
    return adapter.addOne(field, {...state});
  }),
  on(FormEditActions.removeField, (state, {id}) => {
    return adapter.removeOne(id, {...state});
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
      // selectedField: state.selectedField,
      // fields: updateArray(state.fields, index, styles)
    }
  }),
  on(FormEditActions.moveFieldInArray, (state, {fields}) => {
    return adapter.setAll(fields, {...state})
  }),);
