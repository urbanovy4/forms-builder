import { createAction, props } from '@ngrx/store';

import { User } from '../../../../helpers/models/model';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SET_TOKEN = '[Auth] Set Token',
  SET_USER_ID = '[Auth] Set User Id',
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAILURE = '[Auth] Register Failure',
  SIGN_OUT = '[Auth] Sign Out'
}

export const logIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ user: User }>()
);

export const logInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ accessToken: string, userId: number }>()
);

export const logInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
);

export const register = createAction(
  AuthActionTypes.REGISTER,
  props<{ user: User }>()
);

export const registerSuccess = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ email: string }>()
);

export const registerFailure = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ error: string }>()
);

export const setToken = createAction(
  AuthActionTypes.SET_TOKEN,
  props<{ accessToken: string }>()
);

export const setUserId = createAction(
  AuthActionTypes.SET_USER_ID,
  props<{ userId: number }>()
);

export const signOut = createAction(AuthActionTypes.SIGN_OUT);
