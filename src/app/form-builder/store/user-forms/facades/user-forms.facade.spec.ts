import {Store} from "@ngrx/store";
import {UserFormsFacade} from "./user-forms.facade";
import {TestBed, waitForAsync} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import * as UserActions from './../actions/user-forms.action';
import {Form} from "../../../../helpers/models/model";

describe('UserFormsFacade', () => {
  let store: Store;
  let facade: UserFormsFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()]
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(UserFormsFacade);
  }));

  it('should call getForms', () => {
    facade.getForms(1);
    const action = UserActions.getForms({userId: 1});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call selectForm', () => {
    const mockForm: Form = {
      formName: 'test',
      id: 1,
      userId: 1,
      fields: []
    };
    facade.selectForm(mockForm);
    const action = UserActions.selectForm({selectedForm: mockForm});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call editForm', () => {
    const mockForm: Form = {
      formName: 'test',
      id: 1,
      userId: 1,
      fields: []
    };
    facade.editForm(mockForm);
    const action = UserActions.editForm({form: mockForm});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showPreviewDialog', () => {
    const mockForm: Form = {
      formName: 'test',
      id: 1,
      userId: 1,
      fields: []
    };
    facade.showPreviewDialog(mockForm);
    const action = UserActions.showPreviewDialog({form: mockForm});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showEditDialog', () => {
    const mockForm: Form = {
      formName: 'test',
      id: 1,
      userId: 1,
      fields: []
    };
    facade.showEditDialog(mockForm);
    const action = UserActions.showEditDialog({form: mockForm});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showRemoveDialog', () => {
    facade.showRemoveDialog(1);
    const action = UserActions.showRemoveDialog({formId: 1});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
})
