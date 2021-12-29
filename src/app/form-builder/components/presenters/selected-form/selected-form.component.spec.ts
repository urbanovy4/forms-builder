import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectedFormComponent} from './selected-form.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SelectedFormComponent', () => {
  let component: SelectedFormComponent;
  let fixture: ComponentFixture<SelectedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SelectedFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
