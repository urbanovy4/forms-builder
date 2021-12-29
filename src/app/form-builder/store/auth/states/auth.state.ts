export const featureName = 'auth';

export interface State {
  accessToken: string;
  isAuthenticated: boolean;
  errorMessage: string;
  userId: number;
}

export const initialState: State = {
  accessToken: null,
  isAuthenticated: false,
  errorMessage: null,
  userId: null
};
