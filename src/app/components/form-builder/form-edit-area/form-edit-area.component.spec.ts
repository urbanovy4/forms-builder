import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAreaComponent } from './form-edit-area.component';

describe('FormEditAreaComponent', () => {
  let component: FormEditAreaComponent;
  let fixture: ComponentFixture<FormEditAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
