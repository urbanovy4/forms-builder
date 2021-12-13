import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as auth from './reducers/auth.reducer';
import * as fieldsTemplates from './reducers/filds-template.reducer';
import * as formBuilder from './reducers/form-builder.reducer';
import * as userForms from './reducers/user-forms.reducer';

export interface AppState {
  auth: auth.IAuthState,
  fieldsTemplates: fieldsTemplates.IFormTemplateState,
  formBuilder: formBuilder.IFormBuilderState,
  userForms: userForms.IUserFormsState
}

export const reducers: ActionReducerMap<any> = {
  auth: auth.authReducer,
  fieldsTemplates: fieldsTemplates.fildsTemplateReducer,
  formBuilder: formBuilder.formBuilderReducer,
  userForms: userForms.userFormsReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
