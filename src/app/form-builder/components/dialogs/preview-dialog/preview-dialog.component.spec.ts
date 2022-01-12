import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewDialogComponent} from './preview-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../../material/material.module";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Form} from "../../../../helpers/models/model";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('PreviewDialogComponent', () => {
  let component: PreviewDialogComponent;
  let fixture: ComponentFixture<PreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule],
      declarations: [PreviewDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: <Form>{
            userId: 1,
            id: 1,
            fields: [],
            formName: 'Test'
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PreviewDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
