import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as auth from './reducers/auth.reducer';

export interface AppState {
  auth: auth.AuthState
}

export const reducers: ActionReducerMap<any> = {
  auth: auth.authReducer
};


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
