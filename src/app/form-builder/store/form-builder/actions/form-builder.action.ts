import {createAction, props} from "@ngrx/store";
import {AvailableStyles, Form, FormField} from "../../../../helpers/models/model";

import {DefaultFieldAction, DialogActions, FormBuilderActions, ChangeStyleActions, FormActions} from './actions.model';


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
  FormBuilderActions.ADD_FIELD,
  props<{ field: FormField }>()
);

export const removeField = createAction(
  FormBuilderActions.REMOVE_FIELD,
  props<{ fields: FormField[] }>()
);

export const selectField = createAction(
  FormBuilderActions.SELECT_FIELD,
  props<{ index: number }>()
);

export const deselectField = createAction(
  FormBuilderActions.DESELECT_FIELD
);

export const clearFieldState = createAction(
  FormBuilderActions.CLEAR_FIELD_STATE
);

export const changeStyle = createAction(
  ChangeStyleActions.CHANGE_STYLE,
  props<{ styles: AvailableStyles, index: number }>()
);

export const moveFieldInArray = createAction(
  FormBuilderActions.MOVE_FIELD,
  props<{ fields: FormField[] }>()
);

export const saveForm = createAction(
  FormActions.SAVE_FORM,
  props<{ fields: FormField[], userId: number, formName: string }>()
);

export const saveFormSuccess = createAction(
  FormActions.SAVE_FORM_SUCCESS,
  props<{ message: string }>()
);

export const saveFormFailure = createAction(
  FormActions.SAVE_FORM_FAILURE,
  props<{ error: any }>()
);

export const removeForm = createAction(
  FormActions.REMOVE_FORM,
  props<{ formId: number }>()
);

export const removeFormSuccess = createAction(
  FormActions.REMOVE_FORM_SUCCESS,
  props<any>()
);

export const removeFormFailure = createAction(
  FormActions.REMOVE_FORM_FAILURE,
  props<{ error: string }>()
);

export const getForms = createAction(
  FormActions.GET_FORMS,
  props<{ userId: number }>()
);

export const getFormsSuccess = createAction(
  FormActions.GET_FORMS_SUCCESS,
  props<{ forms: Form[] }>()
);

export const getFormsFailure = createAction(
  FormActions.GET_FORMS_FAILURE,
  props<{ error: string }>()
);

export const selectForm = createAction(
  FormActions.SELECT_FORM,
  props<{ selectedForm: Form }>()
);

export const showSaveDialog = createAction(
  DialogActions.SHOW_SAVE_DIALOG,
  props<{ fields: FormField[], userId: number }>()
);

export const showRemoveDialog = createAction(
  DialogActions.SHOW_REMOVE_DIALOG,
  props<{ formId: number }>()
);
