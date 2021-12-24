import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from "../services/auth/auth.service";
import {AuthFacade} from "../../form-builder/store/auth/facades/auth.facade";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: AuthService;
  let facade: AuthFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AuthGuard,
          useValue: jasmine.createSpyObj('AuthGuard', [''])
        },
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', [''])
        },
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade', [''])
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthService);
    facade = TestBed.inject(AuthFacade);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
