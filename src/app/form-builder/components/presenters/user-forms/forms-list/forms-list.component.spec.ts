import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsListComponent} from './forms-list.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FormsListComponent', () => {
  let component: FormsListComponent;
  let fixture: ComponentFixture<FormsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
