import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormEditAreaLayoutComponent} from './form-edit-area-layout.component';
import {AvailableStyles, FormField} from "../../../../../helpers/models/model";
import {NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges} from "@angular/core";

describe('FormEditAreaLayoutComponent', () => {
  let component: FormEditAreaLayoutComponent;
  let fixture: ComponentFixture<FormEditAreaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditAreaLayoutComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FormEditAreaLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call selectedField', () => {
    const field: FormField = {
      type: 'Button',
      label: 'Test',
      icon: 'fa fa-submit',
      id: 1,
      availableStyles: {}
    };
    const index: number = 1;
    spyOn(component.selectField, 'emit');
    component.selectedField(field, index);
    expect(component.selectField.emit).toHaveBeenCalledWith({field, index});
  });

  it('should call removeField', () => {
    const index: number = 1;
    const fieldList: FormField[] = [];
    spyOn(component.deleteField, 'emit');
    const changes: SimpleChanges = {
      formFieldList: new SimpleChange(null, [], null)
    };
    component.ngOnChanges(changes);
    fixture.detectChanges();
    component.removeField(index);
    expect(component.deleteField.emit).toHaveBeenCalledWith(fieldList);
  });
});
