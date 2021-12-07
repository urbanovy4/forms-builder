import {createAction, props} from "@ngrx/store";
import {IFormField} from "../../shared/models/model";

export enum FormEditAction {
  ADD_FIELD = '[EDIT] Add Field',
  REMOVE_FIELD = '[EDIT] Remove Field',
}

export enum DefaultFieldAction {
  GET_DEFAULT_FIELDS = '[GET DEFAULT] Get Default Fields',
  GET_DEFAULT_FIELDS_SUCCESS = '[GET DEFAULT] Get Default Fields Success',
  GET_DEFAULT_FIELDS_FAILURE = '[GET DEFAULT] Get Default Fields Failure',
}

export const getDefaultFields = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS,
);

export const getDefaultFieldsSuccess = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_SUCCESS,
  props<{defaultFields: IFormField[]}>()
);

export const getDefaultFieldsFailure = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_FAILURE,
  props<{error: any}>()
);

export const addField = createAction(
  FormEditAction.ADD_FIELD,
  props<{ field: IFormField }>()
);

export const removeField = createAction(
  FormEditAction.REMOVE_FIELD
);
