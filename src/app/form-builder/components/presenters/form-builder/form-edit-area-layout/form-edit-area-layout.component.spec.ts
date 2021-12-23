import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAreaLayoutComponent } from './form-edit-area-layout.component';

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
});
