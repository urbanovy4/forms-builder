import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsTemplateComponent } from './fields-template.component';

describe('FieldsListComponent', () => {
  let component: FieldsTemplateComponent;
  let fixture: ComponentFixture<FieldsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsTemplateComponent ]
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
});
