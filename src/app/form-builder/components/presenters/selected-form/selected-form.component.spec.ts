import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFormComponent } from './selected-form.component';

describe('SelectedFormComponent', () => {
  let component: SelectedFormComponent;
  let fixture: ComponentFixture<SelectedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFormComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SelectedFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
