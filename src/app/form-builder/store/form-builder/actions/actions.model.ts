export enum FormBuilderActions {
  ADD_FIELD = '[FORM BUILDER] Add Field',
  REMOVE_FIELD = '[FORM BUILDER] Remove Field',
  SELECT_FIELD = '[FORM BUILDER] Select Field',
  DESELECT_FIELD = '[FORM BUILDER] Deselect Field',
  MOVE_FIELD = '[FORM BUILDER] Move Field',
  CLEAR_FIELD_STATE = '[FORM BUILDER] Clear Field State'
}

export enum ChangeStyleActions {
  CHANGE_STYLE = '[STYLE] Change Style'
}

export enum DefaultFieldAction {
  GET_DEFAULT_FIELDS = '[FIELDS] Get Default Fields',
  GET_DEFAULT_FIELDS_SUCCESS = '[FIELDS] Get Default Fields Success',
  GET_DEFAULT_FIELDS_FAILURE = '[FIELDS] Get Default Fields Failure',
}

export enum FormActions {
  GET_FORMS = '[FORM] Get Forms',
  GET_FORMS_SUCCESS = '[FORM] Get Forms Success',
  GET_FORMS_FAILURE = '[FORM] Get Forms Failure',
  SELECT_FORM = '[FORM] Select Form',
  SAVE_FORM = '[FORM] Save Form',
  SAVE_FORM_SUCCESS = '[FORM] Save Form Success',
  SAVE_FORM_FAILURE = '[FORM] Save Form Failure',
  REMOVE_FORM = '[FORM] Remove Form',
  REMOVE_FORM_SUCCESS = '[FORM] Remove Form Success',
  REMOVE_FORM_FAILURE = '[FORM] Remove Form Failure',
}

export enum DialogActions {
  SHOW_SAVE_DIALOG = '[DIALOG] Show Save Dialog',
  SHOW_REMOVE_DIALOG = '[DIALOG] Show Remove Dialog'
}
