import {createAction, props} from "@ngrx/store";
import {IFormField} from "../../shared/models/model";

export enum FormBuilderActions {
  SELECT_FIELD = '[SELECT] Select Field',
  DESELECT_FIELD = '[SELECT] Deselect Field'
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
  props<{ defaultFields: IFormField[] }>()
);

export const getDefaultFieldsFailure = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_FAILURE,
  props<{ error: any }>()
);

export const selectField = createAction(
  FormBuilderActions.SELECT_FIELD,
  props<{selectedField: IFormField}>()
);

export const deselectField = createAction(
  FormBuilderActions.DESELECT_FIELD
);

