import {
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
  setToken,
  signOut
} from "../actions/auth.action";
import {createReducer, on} from "@ngrx/store";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  errorMessage: null,
};

export const authReducer = createReducer(initialState,
  on(logInSuccess, (state, {accessToken}) => {
    return {
      ...state,
      isAuthenticated: true,
      accessToken,
    }
  }),
  on(logInFailure, (state, {error}) => {
    return {
      ...state,
      errorMessage: error
    }
  }),
  // on(registerSuccess, (state) => {
  //   return {
  //     ...state
  //   }
  // }),
  on(registerFailure, (state, {error}) => {
    return {
      ...state,
      errorMessage: error
    }
  }),
  on(signOut, () => {
    return initialState;
  }),
  on(setToken, (state) => {
    return {
      ...state,
      isAuthenticated: true
    }
  })
);
