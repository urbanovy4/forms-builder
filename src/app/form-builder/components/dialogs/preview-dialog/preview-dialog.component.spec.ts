import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewDialogComponent} from './preview-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../../material/material.module";

describe('PreviewDialogComponent', () => {
  let component: PreviewDialogComponent;
  let fixture: ComponentFixture<PreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewDialogComponent],
      imports: [ReactiveFormsModule, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
