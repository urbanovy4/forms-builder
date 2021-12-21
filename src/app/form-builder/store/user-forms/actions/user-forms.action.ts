import {createAction, props} from "@ngrx/store";
import {DialogActions, FormActions} from "../../form-builder/actions/actions.model";
import {Form} from "../../../../helpers/models/model";

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

export const removeForm = createAction(
  FormActions.REMOVE_FORM,
  props<{ formId: number }>()
);

export const removeFormSuccess = createAction(
  FormActions.REMOVE_FORM_SUCCESS,
  props<{ formId: number }>()
);

export const removeFormFailure = createAction(
  FormActions.REMOVE_FORM_FAILURE,
  props<{ error: string }>()
);

export const selectForm = createAction(
  FormActions.SELECT_FORM,
  props<{ selectedForm: Form }>()
);

export const editForm = createAction(
  FormActions.EDIT_FORM,
  props<{ form: Form }>()
);

export const editFormSuccess = createAction(
  FormActions.EDIT_FORM_SUCCESS,
  props<{ form: Form }>()
);

export const editFormFailure = createAction(
  FormActions.EDIT_FORM_FAILURE,
  props<{ error: string }>()
);

export const showRemoveDialog = createAction(
  DialogActions.SHOW_REMOVE_DIALOG,
  props<{ formId: number }>()
);

export const showEditDialog = createAction(
  DialogActions.SHOW_EDIT_DIALOG,
  props<{ form: Form }>()
);

export const showPreviewDialog = createAction(
  DialogActions.SHOW_PREVIEW_DIALOG,
  props<{ form: Form }>()
);
