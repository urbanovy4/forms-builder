import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditDialogComponent} from './edit-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {MaterialModule} from "../../../../material/material.module";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Form} from "../../../../helpers/models/model";

describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;
  let service: UserFormsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [EditDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {
            form: <Form>{
              formName: 'Test',
              id: 1,
              fields: [],
              userId: 1
            }
          }
        },
        {
          provide: UserFormsFacade,
          useValue: jasmine.createSpyObj('UserFormsFacade', ['']),
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserFormsFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should init form', () => {
  //   component.ngOnInit();
  //   // expect(component.).toBeTruthy();
  // });
});
