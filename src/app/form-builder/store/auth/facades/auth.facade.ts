import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AuthState, User} from "../../../../helpers/models/model";
import {logIn, register, setToken, setUserId, signOut} from "../actions/auth.action";
import {Observable} from "rxjs";
import * as AuthSelectors from '../selectors/auth.selector'

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  isAuthenticated$: Observable<boolean> = this.store.pipe(select(AuthSelectors.checkAuth));

  constructor(
    private store: Store<AuthState>
  ) {
  }

  /**
   * Login
   */

  login(user: User) {
    this.store.dispatch(logIn({user}))
  }

  /**
   * Register
   */

  register(user: User) {
    this.store.dispatch(register({user}))
  }

  /**
   * SignOut
   */

  signOut() {
    this.store.dispatch(signOut());
    // this.store.dispatch(clearFieldState());
  }

  /**
   * Set token
   */

  setToken(accessToken: string) {
    this.store.dispatch(setToken({accessToken}));
  }

  /**
   * Set user id
   */

  setUserId(userId: number) {
    this.store.dispatch(setUserId({userId}))
  }
}
