import {createAction, props} from "@ngrx/store";
import {Form} from "../../shared/models/model";

export enum UserFormsActions {
  GET_FORMS = '[FORM] Get Forms',
  GET_FORMS_SUCCESS = '[FORM] Get Forms Success',
  GET_FORMS_FAILURE = '[FORM] Get Forms Failure',
  SELECT_FORM = '[FORM] Select Form'
}

export const getForms = createAction(
  UserFormsActions.GET_FORMS,
  props<{userId: number}>()
);

export const getFormsSuccess = createAction(
  UserFormsActions.GET_FORMS_SUCCESS,
  props<{forms: Form[]}>()
);

export const getFormsFailure = createAction(
  UserFormsActions.GET_FORMS_FAILURE,
  props<{error: string}>()
);

export const selectForm = createAction(
  UserFormsActions.SELECT_FORM,
  props<{selectedForm: Form}>()
);
