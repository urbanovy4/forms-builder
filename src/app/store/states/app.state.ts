import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
