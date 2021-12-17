import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

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
