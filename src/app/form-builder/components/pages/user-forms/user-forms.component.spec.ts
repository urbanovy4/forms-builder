import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserFormsComponent} from './user-forms.component';
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {ReactiveComponentModule} from "@ngrx/component";
import {Form} from "../../../../helpers/models/model";

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
          useValue: jasmine.createSpyObj('AuthFacade', [''])
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormsComponent);
    component = fixture.componentInstance;

    userFormsFacade = TestBed.inject(UserFormsFacade);
    authFacade = TestBed.inject(AuthFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should init fields', () => {
  //   component.ngOnInit();
  // });

  it('should call getForms', () => {
    const userId: number = 1;

    component.getForms(userId);
    expect(userFormsFacade.getForms).toHaveBeenCalled();
  });

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
    }
    component.editForm(form);
    expect(userFormsFacade.removeForm).toHaveBeenCalled();
  });
});
