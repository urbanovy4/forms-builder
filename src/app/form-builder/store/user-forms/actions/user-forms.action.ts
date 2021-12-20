import {createAction, props} from "@ngrx/store";
import {FormActions} from "../../form-builder/actions/actions.model";
import {Form} from "../../../../helpers/models/model";

export const getForms = createAction(
  FormActions.GET_FORMS,
  props<{ userId: number }>()
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
