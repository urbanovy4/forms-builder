import {createAction, props} from "@ngrx/store";
import {IFormField} from "../../shared/models/model";

export enum UserFormsActions {
  GET_FORMS = '[User] Get Forms',
  GET_FORMS_SUCCESS = '[User] Get Forms Success',
  GET_FORMS_FAILURE = '[User] Get Forms Failure'
}

export const getForms = createAction(
  UserFormsActions.GET_FORMS,
  props<{userId: number}>()
);

export const getFormsSuccess = createAction(
  UserFormsActions.GET_FORMS_SUCCESS,
  props<{forms: [{userId: number, fields: IFormField[], id: number}]}>()
);

export const getFormsFailure = createAction(
  UserFormsActions.GET_FORMS_FAILURE,
  props<{error: string}>()
);
