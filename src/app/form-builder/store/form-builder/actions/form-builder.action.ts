import {createAction, props} from "@ngrx/store";
import {AvailableStyles, FormField} from "../../../../helpers/models/model";

import {DialogActions, FormBuilderActions, ChangeStyleActions, FormActions} from './actions.model';

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
  props<{ field: FormField, index: number }>()
);

export const deselectField = createAction(
  FormBuilderActions.DESELECT_FIELD
);

export const clearFormBuilderState = createAction(
  FormBuilderActions.CLEAR_FORM_BUILDER_STATE
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

export const showSaveDialog = createAction(
  DialogActions.SHOW_SAVE_DIALOG,
  props<{ fields: FormField[], userId: number }>()
);

export const updateIndex = createAction(
  FormBuilderActions.UPDATE_INDEX,
  props<{ index: number }>()
);
