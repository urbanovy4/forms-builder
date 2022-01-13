import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../../environments/environment';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
