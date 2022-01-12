import {
  State as AuthState,
  featureName,
  initialState
} from './../states/auth.state'
import * as AuthSelectors from './auth.selector';

interface State {
  [featureName]: AuthState
}

describe('AuthSelectors', () => {
  it('should call auth selectors', () => {
    const state: State = {
      [featureName]: {
        ...initialState
      }
    };

    expect(AuthSelectors.checkAuth(state)).toEqual(state.auth.isAuthenticated);
    expect(AuthSelectors.getUserId(state)).toEqual(state.auth.userId);
  });
});
