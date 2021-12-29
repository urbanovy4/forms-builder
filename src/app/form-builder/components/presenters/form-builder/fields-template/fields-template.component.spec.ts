import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FieldsTemplateComponent} from './fields-template.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FieldsListComponent', () => {
  let component: FieldsTemplateComponent;
  let fixture: ComponentFixture<FieldsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldsTemplateComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call noReturnPredicate', () => {
    expect(component.noReturnPredicate()).not.toBe(true);
  });
});
