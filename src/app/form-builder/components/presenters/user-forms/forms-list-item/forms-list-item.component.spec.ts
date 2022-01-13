import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsListItemComponent } from './forms-list-item.component';

describe('FormsListItemComponent', () => {
  let component: FormsListItemComponent;
  let fixture: ComponentFixture<FormsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FormsListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
