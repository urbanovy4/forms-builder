import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as auth from './reducers/auth.reducer';
import * as fieldsTemplates from './reducers/filds-template.reducer';
import * as formBuilder from './reducers/form-builder.reducer';

export interface AppState {
  auth: auth.IAuthState,
  fieldsTemplates: fieldsTemplates.IFormTemplateState,
  formBuilder: formBuilder.IFormBuilderState,
}

export const reducers: ActionReducerMap<any> = {
  auth: auth.authReducer,
  fieldsTemplates: fieldsTemplates.fildsTemplateReducer,
  formBuilder: formBuilder.formBuilderReducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
