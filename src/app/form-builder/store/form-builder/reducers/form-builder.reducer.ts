import {createReducer, on} from "@ngrx/store";
import {initialState} from "../states/form-builder.state";
import * as FormEditActions from "./../actions/form-builder.action";
import {updateArray} from "../../../../helpers/services/utils/utils.service";

export const formBuilderReducer = createReducer(initialState,
  on(FormEditActions.addField, (state, {field}) => {
    return {
      ...state,
      fields: state.fields.concat(field)
    };
  }),
  on(FormEditActions.removeField, (state, {fields}) => {
    return {
      ...state,
      fields
    }
  }),
  on(FormEditActions.selectField, (state, {field, index}) => {
    return {
      ...state,
      selectedField: field,
      selectedFieldIndex: index
    }
  }),
  on(FormEditActions.deselectField, state => {
    return {
      ...state,
      selectedField: null
    }
  }),
  on(FormEditActions.clearFieldState, () => {
    return initialState;
  }),
  on(FormEditActions.clearFormBuilderState, () => {
    return initialState;
  }),
  on(FormEditActions.changeStyle, (state, {styles, index}) => {
    return {
      ...state,
      fields: updateArray(state.fields, index, styles)
    }
  }),
  on(FormEditActions.moveFieldInArray, (state, {fields}) => {
    return {
      ...state,
      fields
    };
  })
);
