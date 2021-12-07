import {
  logInFailure,
  logInSuccess,
  registerFailure,
  setToken,
  signOut
} from "../actions/auth.action";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export interface IAuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  errorMessage: string | null;
}

export const initialState: IAuthState = {
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

export const featureSelector = createFeatureSelector<IAuthState>('auth');
export const authSelector = createSelector(
  featureSelector,
  state => ({
    accessToken: state.accessToken, errorMessage: state.errorMessage, isAuthenticated: state.isAuthenticated
  })
);
