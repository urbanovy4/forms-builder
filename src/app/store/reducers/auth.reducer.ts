import {
  logInFailure,
  logInSuccess,
  registerFailure,
  setToken, setUserId,
  signOut
} from "../actions/auth.actions";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export interface IAuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  errorMessage: string | null;
  userId: number;
}

export const initialState: IAuthState = {
  isAuthenticated: false,
  accessToken: null,
  errorMessage: null,
  userId: null
};

export const authReducer = createReducer(initialState,
  on(logInSuccess, (state, {accessToken, userId}) => {
    return {
      ...state,
      isAuthenticated: true,
      accessToken,
      userId
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
  on(setToken, (state, {accessToken}) => {
    return {
      ...state,
      isAuthenticated: true,
      accessToken
    }
  }),
  on(setUserId, (state, {userId}) => {
    return {
      ...state,
      userId
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
