import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesListLayoutComponent } from './styles-list-layout.component';

describe('StylesListLayoutComponent', () => {
  let component: StylesListLayoutComponent;
  let fixture: ComponentFixture<StylesListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesListLayoutComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
