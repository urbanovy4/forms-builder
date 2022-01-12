import {Store} from "@ngrx/store";
import {State} from "../states/auth.state";
import {AuthFacade} from "./auth.facade";
import {TestBed, waitForAsync} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {User} from "../../../../helpers/models/model";
import * as AuthActions from './../actions/auth.action'

describe('AuthFacade', () => {
  let store: Store<State>;
  let facade: AuthFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()]
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(AuthFacade);
  }));

  it('should call login', () => {
    const user: User = {
      email: 'test@test.com',
      password: 'qwerty'
    };

    facade.login(user);
    const action = AuthActions.logIn({user});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call register', () => {
    const user: User = {
      email: 'test@test.com',
      password: 'qwerty'
    };

    facade.register(user);
    const action = AuthActions.register({user});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call signOut', () => {
    facade.signOut();
    const action = AuthActions.signOut();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call setToken', () => {
    const accessToken: string = '';

    facade.setToken(accessToken);
    const action = AuthActions.setToken({accessToken});
    expect(store.dispatch).toHaveBeenCalledWith(action)
  });

  it('should call setUserId', () => {
    const userId: number = 1;

    facade.setUserId(userId);
    const action = AuthActions.setUserId({userId});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
