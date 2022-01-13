import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { AuthState, User } from '../../../../helpers/models/model';
import { logIn, register, setToken, setUserId, signOut } from '../actions/auth.action';
import { clearFieldState } from '../../form-builder/actions/form-builder.action';
import { checkAuth, getUserId } from '../selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  private notifyToUnsubscribe$: Subject<null> = new Subject<null>();
  readonly notifyToUnsubscribe: Observable<null> = this.notifyToUnsubscribe$.asObservable();

  isAuthenticated$: Observable<boolean> = this.store.pipe(select(checkAuth));
  userId$: Observable<number> = this.store.pipe(select(getUserId));

  constructor(
    private store: Store<AuthState>
  ) {
  }

  /**
   * Login
   * @param user
   */
  login(user: User) {
    this.store.dispatch(logIn({user}))
  }

  /**
   * Register
   * @param user
   */
  register(user: User) {
    this.store.dispatch(register({user}))
  }

  /**
   * SignOut
   */
  signOut() {
    this.store.dispatch(signOut());
    this.store.dispatch(clearFieldState());
  }

  /**
   * Set token
   * @param accessToken
   */
  setToken(accessToken: string) {
    this.store.dispatch(setToken({accessToken}));
  }

  /**
   * Set user id
   * @param userId
   */
  setUserId(userId: number) {
    this.store.dispatch(setUserId({userId}))
  }

  unsubscribe() {
    this.notifyToUnsubscribe$.next(null);
  }
}
