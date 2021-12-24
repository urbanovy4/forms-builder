import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RemoveDialogComponent} from './remove-dialog.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";

describe('RemoveFormDialogComponent', () => {
  let component: RemoveDialogComponent;
  let fixture: ComponentFixture<RemoveDialogComponent>;
  let facade: UserFormsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveDialogComponent],
      providers: [
        {
          provide: UserFormsFacade,
          useValue: jasmine.createSpyObj('UserFormsFacade', ['removeForm'])
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: <{ formId: number }>{
            formId: 1
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(RemoveDialogComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(UserFormsFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeForm', () => {
    component.remove();
    expect(facade.removeForm).toHaveBeenCalledWith(1);
  });
});
