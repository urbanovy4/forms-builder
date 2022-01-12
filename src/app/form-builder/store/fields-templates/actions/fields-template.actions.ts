import {createAction, props} from "@ngrx/store";
import {FormField} from "../../../../helpers/models/model";

export enum DefaultFieldAction {
  GET_DEFAULT_FIELDS = '[FIELDS] Get Default Fields',
  GET_DEFAULT_FIELDS_SUCCESS = '[FIELDS] Get Default Fields Success',
  GET_DEFAULT_FIELDS_FAILURE = '[FIELDS] Get Default Fields Failure',
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
