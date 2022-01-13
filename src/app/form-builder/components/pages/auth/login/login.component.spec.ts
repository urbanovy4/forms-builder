import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthFacade } from '../../../../store/auth/facades/auth.facade';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let facade: AuthFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade', ['login'])
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    facade = TestBed.inject(AuthFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login', () => {
    component.onSubmit();
    expect(facade.login).toHaveBeenCalled();
  });
});
