import {createAction, props} from "@ngrx/store";
import {AvailableStyles, IFormField} from "../../shared/models/model";

export enum FieldsActions {
  ADD_FIELD = '[FIELD] Add Field',
  REMOVE_FIELD = '[FIELD] Remove Field',
  SELECT_FIELD = '[FIELD] Select Field',
  DESELECT_FIELD = '[FIELD] Deselect Field',
  MOVE_FIELD = '[FIELD] Move Field',
  CLEAR_FIELD_STATE = '[FIELD] Clear Field State'
}

export enum ChangeStyleActions {
  CHANGE_STYLE = '[STYLE] Change Style'
}

export enum DefaultFieldAction {
  GET_DEFAULT_FIELDS = '[FIELDS] Get Default Fields',
  GET_DEFAULT_FIELDS_SUCCESS = '[FIELDS] Get Default Fields Success',
  GET_DEFAULT_FIELDS_FAILURE = '[FIELDS] Get Default Fields Failure',
}

export enum FormActions {
  SAVE_FORM = '[FORM] Save Form',
  SAVE_FORM_SUCCESS = '[FORM] Save Form Success',
  SAVE_FORM_FAILURE = '[FORM] Save Form Failure'
}

export const getDefaultFields = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS,
);

export const getDefaultFieldsSuccess = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_SUCCESS,
  props<{ defaultFields: IFormField[] }>()
);

export const getDefaultFieldsFailure = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_FAILURE,
  props<{ error: string }>()
);

export const addField = createAction(
  FieldsActions.ADD_FIELD,
  props<{field: IFormField}>()
);

export const removeField = createAction(
  FieldsActions.REMOVE_FIELD,
  props<{fields: IFormField[]}>()
);

export const selectField = createAction(
  FieldsActions.SELECT_FIELD,
  props<{index: number}>()
);

export const deselectField = createAction(
  FieldsActions.DESELECT_FIELD
);

export const clearFieldState = createAction(
  FieldsActions.CLEAR_FIELD_STATE
);

export const changeStyle = createAction(
  ChangeStyleActions.CHANGE_STYLE,
  props<{styles: AvailableStyles, index: number}>()
);

export const moveFieldInArray = createAction(
  FieldsActions.MOVE_FIELD,
  props<{fields: IFormField[]}>()
);

export const saveForm = createAction(
  FormActions.SAVE_FORM,
  props<{fields: IFormField[], userId: number, formName: string}>()
);

export const saveFormSuccess = createAction(
  FormActions.SAVE_FORM_SUCCESS,
  props<{message: string}>()
);

export const saveFormFailure = createAction(
  FormActions.SAVE_FORM_FAILURE,
  props<{error: any}>()
);
