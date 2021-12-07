import {createAction, props} from "@ngrx/store";
import {IFormField} from "../../shared/models/model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

export enum FormBuilderActions {
  ADD_FIELD = '[ADD] Add Field',
  ADD_FIELD_SUCCESS = '[ADD] Add Field Success',
  ADD_FIELD_FAILURE = '[ADD] Add Field Failure',
  REMOVE_FIELD = '[REMOVE] Remove Field',
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

export const addField = createAction(
  FormBuilderActions.ADD_FIELD,
  props<{field: IFormField}>()
);

export const addFieldSuccess = createAction(
  FormBuilderActions.ADD_FIELD_SUCCESS,
  props<{field: IFormField}>()
);

export const addFieldFailure = createAction(
  FormBuilderActions.ADD_FIELD_FAILURE,
  props<{error: any}>()
);

export const removeField = createAction(
  FormBuilderActions.REMOVE_FIELD
);
