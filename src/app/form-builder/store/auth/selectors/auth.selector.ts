import {createFeatureSelector, createSelector} from "@ngrx/store";
import {featureName} from "../states/auth.state";
import {State} from '../states/auth.state'

const getAuthState = createFeatureSelector<State>(featureName);

export const checkAuth = createSelector(
  getAuthState,
  state => state.isAuthenticated
);

export const getUserId = createSelector(
  getAuthState,
  state => state.userId
);
