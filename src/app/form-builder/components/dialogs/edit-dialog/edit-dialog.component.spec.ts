import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditDialogComponent } from './edit-dialog.component';
import { UserFormsFacade } from '../../../store/user-forms/facades/user-forms.facade';
import { Form } from '../../../../helpers/models/model';

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
          useValue: jasmine.createSpyObj('UserFormsFacade', ['editForm']),
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should call editForm', () => {
    component.ngOnInit();
    component.edit();
    expect(service.editForm).toHaveBeenCalled();
  });
});
