import { createReducer, on } from '@ngrx/store';

import { initialState } from '../states/auth.state';
import { logInFailure, logInSuccess, registerFailure, setToken, setUserId, signOut } from '../actions/auth.action';

export const authReducer = createReducer(initialState,
  on(logInSuccess, (state, {accessToken, userId}) => {
    return {
      ...state,
      accessToken,
      userId,
      isAuthenticated: true
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
      accessToken,
      isAuthenticated: true
    }
  }),
  on(setUserId, (state, {userId}) => {
    return {
      ...state,
      userId
    }
  })
);
