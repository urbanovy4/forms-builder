import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAreaLayoutComponent } from './form-edit-area-layout.component';
import {FormField} from "../../../../../helpers/models/model";

describe('FormEditAreaLayoutComponent', () => {
  let component: FormEditAreaLayoutComponent;
  let fixture: ComponentFixture<FormEditAreaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditAreaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditAreaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call selectedField', () => {
    const formField: FormField = {
      type: 'Button',
      label: 'Test',
      icon: 'fa fa-submit',
      id: 1,
      availableStyles: {}
    };
    const index: number = 1;

    component.selectedField(formField, index);
    expect(component.selectedField).toHaveBeenCalled();
  });
});
