import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserFormsComponent} from './user-forms.component';
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {ReactiveComponentModule} from "@ngrx/component";

describe('UserFormsComponent', () => {
  let component: UserFormsComponent;
  let fixture: ComponentFixture<UserFormsComponent>;
  let userFormsFacade: UserFormsFacade;
  let authFacade: AuthFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
      declarations: [UserFormsComponent],
      providers: [
        {
          provide: UserFormsFacade,
          useValue: jasmine.createSpyObj('UserFormsFacade', [''])
        },
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade', [''])
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormsComponent);
    component = fixture.componentInstance;

    userFormsFacade = TestBed.inject(UserFormsFacade);
    authFacade = TestBed.inject(AuthFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
