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

  public isAuthenticated$: Observable<boolean> = this.store.pipe(select(checkAuth));
  public userId$: Observable<number> = this.store.pipe(select(getUserId));

  constructor(
    private store: Store<AuthState>
  ) {
  }

  /**
   * Login
   * @param user
   */
  public login(user: User): void {
    this.store.dispatch(logIn({user}))
  }

  /**
   * Register
   * @param user
   */
  public register(user: User): void {
    this.store.dispatch(register({user}))
  }

  /**
   * SignOut
   */
  public signOut(): void {
    this.store.dispatch(signOut());
    this.store.dispatch(clearFieldState());
  }

  /**
   * Set token
   * @param accessToken
   */
  public setToken(accessToken: string): void {
    this.store.dispatch(setToken({accessToken}));
  }

  /**
   * Set user id
   * @param userId
   */
  public setUserId(userId: number): void {
    this.store.dispatch(setUserId({userId}))
  }

  /**
   * Trigger unsubscribe
   */
  public unsubscribe(): void {
    this.notifyToUnsubscribe$.next(null);
  }
}
