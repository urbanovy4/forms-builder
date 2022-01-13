import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StylesListLayoutComponent } from './styles-list-layout.component';

describe('StylesListLayoutComponent', () => {
  let component: StylesListLayoutComponent;
  let fixture: ComponentFixture<StylesListLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StylesListLayoutComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(StylesListLayoutComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    spyOn(component.activeStyles, 'emit');
    component.onSubmit();
    expect(component.activeStyles.emit).toHaveBeenCalled();
  });

  it('should call is isButton', () => {
    component.selectedField = {
      type: 'Text',
      id: 1,
      availableStyles: {},
      icon: 'fa fa-icon',
      label: 'Test'
    };
    expect(component.isButton()).toBeFalse();
  });

  it('should call is isCheckbox', () => {
    component.selectedField = {
      type: 'Text',
      id: 1,
      availableStyles: {},
      icon: 'fa fa-icon',
      label: 'Test'
    };
    expect(component.isCheckbox()).toBeFalse();
  });

});
