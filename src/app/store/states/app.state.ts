import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as auth from '../reducers/auth.reducer';
import * as fieldsTemplates from '../reducers/filds-template.reducer';
import * as formBuilder from '../reducers/forms.reducer';

export interface AppState {
  // auth: auth.IAuthState,
  // fieldsTemplates: fieldsTemplates.IFormTemplateState,
  // formBuilder: formBuilder.FormBuilderState,
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};

// export const reducers: ActionReducerMap<any> = {z
//   auth: auth.authReducer,
//   fieldsTemplates: fieldsTemplates.fildsTemplateReducer,
//   formBuilder: formBuilder.formsReducer,
// };

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
