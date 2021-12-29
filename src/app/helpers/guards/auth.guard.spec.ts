import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from "../services/auth/auth.service";
import {AuthFacade} from "../../form-builder/store/auth/facades/auth.facade";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: AuthService;
  let facade: AuthFacade;
  // let router = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
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
  });

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthService);
    facade = TestBed.inject(AuthFacade);
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to activate when signed out', () => {
    // service.signOut();
    expect(guard.canActivate(null, null)).toBeFalse();
  });

  it('should be able to activate when logged in', () => {
    const token: string = 'Test token';
    service.setToken(token);
    expect(guard.canActivate(null, null)).toBeTruthy();
  });

});
