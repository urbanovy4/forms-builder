import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User, UserResponse } from '../../models/model';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], providers: [{
        provide: 'API_URL', useValue: ''
      }]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.setItem('token', 'Test token');
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login with mock data', () => {
    const user: User = {
      email: 'test@test.com', password: 'testpassword'
    };
    const response = {
      accessToken: 'test', userId: 1
    }
    service.login(user).subscribe(res => {
      expect(res).toBe(response);
    });
    const req = httpMock.expectOne('/login');
    expect(req.request.method).toEqual('POST');
    req.flush(response);
  });

  it('should set userId', () => {
    const userId: number = 1;
    service.setUserId(userId);
    expect(+localStorage.getItem('userId')).toEqual(userId);
  });

  it('should set token', () => {
    const token: string = 'Test token';
    service.setToken(token);
    expect(service.getToken()).toEqual(token);
  });

  it('should register with mock data', () => {
    const user: User = {
      email: 'test@test.com', password: 'testpassword'
    };

    const response: UserResponse = {
      accessToken: 'Test token', user: {
        email: 'test@test.com', id: 1
      }
    };

    service.register(user).subscribe(res => {
      expect(res).toBe(response);
    });
    const req = httpMock.expectOne('/register');
    expect(req.request.method).toEqual('POST');
    req.flush(response);
  });

  it('should call signOut', () => {
    service.signOut();
    expect(service.getToken()).toEqual(null);
  });

});
