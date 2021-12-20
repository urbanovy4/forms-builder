import {createAction, props} from "@ngrx/store";
import {AvailableStyles, Form, FormField} from "../../helpers/models/model";

export enum FormsActions {
  ADD_FIELD = '[FORM BUILDER] Add Field',
  REMOVE_FIELD = '[FORM BUILDER] Remove Field',
  SELECT_FIELD = '[FORM BUILDER] Select Field',
  DESELECT_FIELD = '[FORM BUILDER] Deselect Field',
  MOVE_FIELD = '[FORM BUILDER] Move Field',
  CLEAR_FIELD_STATE = '[FORM BUILDER] Clear Field State'
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
  GET_FORMS = '[FORM] Get Forms',
  GET_FORMS_SUCCESS = '[FORM] Get Forms Success',
  GET_FORMS_FAILURE = '[FORM] Get Forms Failure',
  SELECT_FORM = '[FORM] Select Form',
  SAVE_FORM = '[FORM] Save Form',
  SAVE_FORM_SUCCESS = '[FORM] Save Form Success',
  SAVE_FORM_FAILURE = '[FORM] Save Form Failure',
  REMOVE_FORM = '[FORM] Remove Form',
  REMOVE_FORM_SUCCESS = '[FORM] Remove Form Success',
  REMOVE_FORM_FAILURE = '[FORM] Remove Form Failure',
}

export enum DialogActions {
  SHOW_SAVE_DIALOG = '[DIALOG] Show Save Dialog',
  SHOW_REMOVE_DIALOG = '[DIALOG] Show Remove Dialog'
}

export const getDefaultFields = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS,
);

export const getDefaultFieldsSuccess = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_SUCCESS,
  props<{ defaultFields: FormField[] }>()
);

export const getDefaultFieldsFailure = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_FAILURE,
  props<{ error: string }>()
);

export const addField = createAction(
  FormsActions.ADD_FIELD,
  props<{ field: FormField }>()
);

export const removeField = createAction(
  FormsActions.REMOVE_FIELD,
  props<{ fields: FormField[] }>()
);

export const selectField = createAction(
  FormsActions.SELECT_FIELD,
  props<{ index: number }>()
);

export const deselectField = createAction(
  FormsActions.DESELECT_FIELD
);

export const clearFieldState = createAction(
  FormsActions.CLEAR_FIELD_STATE
);

export const changeStyle = createAction(
  ChangeStyleActions.CHANGE_STYLE,
  props<{ styles: AvailableStyles, index: number }>()
);

export const moveFieldInArray = createAction(
  FormsActions.MOVE_FIELD,
  props<{ fields: FormField[] }>()
);

// export const saveForm = createAction(
//   FormActions.SAVE_FORM,
//   props<{ fields: FormField[], userId: number, formName: string }>()
// );
//
// export const saveFormSuccess = createAction(
//   FormActions.SAVE_FORM_SUCCESS,
//   props<{ message: string }>()
// );
//
// export const saveFormFailure = createAction(
//   FormActions.SAVE_FORM_FAILURE,
//   props<{ error: any }>()
// );
//
// export const removeForm = createAction(
//   FormActions.REMOVE_FORM,
//   props<{formId: number}>()
// );
//
// export const removeFormSuccess = createAction(
//   FormActions.REMOVE_FORM_SUCCESS,
//   props<any>()
// );
//
// export const removeFormFailure = createAction(
//   FormActions.REMOVE_FORM_FAILURE,
//   props<{error: string}>()
// );
//
// export const getForms = createAction(
//   FormActions.GET_FORMS,
//   props<{userId: number}>()
// );
//
// export const getFormsSuccess = createAction(
//   FormActions.GET_FORMS_SUCCESS,
//   props<{forms: Form[]}>()
// );
//
// export const getFormsFailure = createAction(
//   FormActions.GET_FORMS_FAILURE,
//   props<{error: string}>()
// );
//
// export const selectForm = createAction(
//   FormActions.SELECT_FORM,
//   props<{selectedForm: Form}>()
// );
//
// export const showSaveDialog = createAction(
//   DialogActions.SHOW_SAVE_DIALOG,
//   props<{fields: FormField[], userId: number}>()
// );
//
// export const showRemoveDialog = createAction(
//   DialogActions.SHOW_REMOVE_DIALOG,
//   props<{formId: number}>()
// );
