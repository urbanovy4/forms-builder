import {waitForAsync, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from "../services/auth/auth.service";
import {AuthFacade} from "../../form-builder/store/auth/facades/auth.facade";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {LoginComponent} from "../../form-builder/components/pages/auth/login/login.component";
import {RegisterComponent} from "../../form-builder/components/pages/auth/register/register.component";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: Partial<AuthService>;
  let facade: AuthFacade;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule.withRoutes([
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
          ])
        ],
        providers: [
          AuthGuard,
          {
            provide: AuthService,
            useValue: jasmine.createSpyObj('AuthService', ['signOut', 'isAuthenticated', 'setToken'])
          },
          {
            provide: AuthFacade,
            useValue: jasmine.createSpyObj('AuthFacade', ['signOut'])
          }
        ]
      });
      guard = TestBed.inject(AuthGuard);
      service = TestBed.inject(AuthService);
      facade = TestBed.inject(AuthFacade);
    }
  ));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to activate when signed out', () => {
    service.loggedInState = false;
    expect(guard.canActivate()).toBeFalse();
  });

  it('should be able to activate when logged in', () => {
    service.loggedInState = true;
    expect(guard.canActivate()).toBeTruthy();
  });

});
