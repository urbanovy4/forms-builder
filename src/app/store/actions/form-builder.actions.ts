import {createAction, props} from "@ngrx/store";
import {AvailableStyles, IFormField} from "../../shared/models/model";

export enum FormBuilderActions {
  ADD_FIELD = '[FIELD] Add Field',
  SELECT_FIELD = '[FIELD] Select Field',
  DESELECT_FIELD = '[FIELD] Deselect Field',
  MOVE_FIELD = '[FIELD] Move Field',
}

export enum ChangeStyleActions {
  CHANGE_STYLE = '[STYLE] Change Style'
}

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
  props<{ defaultFields: IFormField[] }>()
);

export const getDefaultFieldsFailure = createAction(
  DefaultFieldAction.GET_DEFAULT_FIELDS_FAILURE,
  props<{ error: string }>()
);

export const addField = createAction(
  FormBuilderActions.ADD_FIELD,
  props<{field: IFormField}>()
);

export const selectField = createAction(
  FormBuilderActions.SELECT_FIELD,
  props<{index: number}>()
);

export const deselectField = createAction(
  FormBuilderActions.DESELECT_FIELD
);

export const changeStyle = createAction(
  ChangeStyleActions.CHANGE_STYLE,
  props<{styles: AvailableStyles, index: number}>()
);

export const moveFieldInArray = createAction(
  FormBuilderActions.MOVE_FIELD,
  props<{fields: IFormField[]}>()
);

