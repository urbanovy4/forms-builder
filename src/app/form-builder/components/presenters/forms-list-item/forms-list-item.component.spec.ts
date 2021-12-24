import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsListItemComponent} from './forms-list-item.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FormsListItemComponent', () => {
  let component: FormsListItemComponent;
  let fixture: ComponentFixture<FormsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
