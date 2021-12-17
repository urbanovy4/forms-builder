import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authFeatureName} from "../states/auth.state";
import {State} from '../states/auth.state'

const getAuthState = createFeatureSelector<State>(authFeatureName);

export const checkAuth = createSelector(
  getAuthState,
  state => state.isAuthenticated
);

export const getUserId = createSelector(
  getAuthState,
  state => state.userId
);
