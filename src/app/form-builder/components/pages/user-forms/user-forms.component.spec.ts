import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserFormsComponent} from './user-forms.component';
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {ReactiveComponentModule} from "@ngrx/component";
import {Form} from "../../../../helpers/models/model";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BehaviorSubject} from "rxjs";

describe('UserFormsComponent', () => {
  let component: UserFormsComponent;
  let fixture: ComponentFixture<UserFormsComponent>;
  let userFormsFacade: UserFormsFacade;
  let authFacade: AuthFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
      declarations: [UserFormsComponent],
      providers: [
        {
          provide: UserFormsFacade,
          useValue: jasmine.createSpyObj('UserFormsFacade', [
            'getForms',
            'showPreviewDialog',
            'showRemoveDialog',
            'showEditDialog'
          ])
        },
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade',
            ['setToken', 'setUserId'],
            {'userId$': new BehaviorSubject<number>(1)}
          )
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormsComponent);
    component = fixture.componentInstance;
    userFormsFacade = TestBed.inject(UserFormsFacade);
    authFacade = TestBed.inject(AuthFacade);
    localStorage.setItem('token', 'Test token');
  }));

  afterAll(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getForms', () => {
  //   component.ngOnInit();
  // });

  it('should call showPreviewDialog', () => {
    const selectedForm: Form = {
      formName: 'Test',
      userId: 1,
      id: 1,
      fields: []
    };
    component.selectForm(selectedForm);
    expect(userFormsFacade.showPreviewDialog).toHaveBeenCalled();
  });

  it('should call showRemoveDialog', () => {
    const userId: number = 1;
    component.removeForm(userId);
    expect(userFormsFacade.showRemoveDialog).toHaveBeenCalled();
  });

  it('should call showEditDialog', () => {
    const form: Form = {
      formName: 'Test',
      id: 1,
      fields: [],
      userId: 1
    };
    component.editForm(form);
    expect(userFormsFacade.showEditDialog).toHaveBeenCalled();
  });
});
