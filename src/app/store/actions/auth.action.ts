import {User} from "../../shared/models/model";
import {createAction, props} from "@ngrx/store";

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SET_TOKEN = '[Auth] Set Token',
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
  props<{ accessToken: string }>()
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
)

export const signOut = createAction(AuthActionTypes.SIGN_OUT);
