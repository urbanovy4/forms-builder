import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StylesListComponent} from './styles-list.component';
import {FormBuilderFacade} from "../../../../store/form-builder/facades/form-builder.facade";
import {ReactiveComponentModule} from "@ngrx/component";
import {AvailableStyles} from "../../../../../helpers/models/model";

describe('StylesListComponent', () => {
  let component: StylesListComponent;
  let fixture: ComponentFixture<StylesListComponent>;
  let formBuilderFacade: FormBuilderFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
      declarations: [StylesListComponent],
      providers: [
        {
          provide: FormBuilderFacade,
          useValue: jasmine.createSpyObj('FormBuilderFacade', ['changeStyle'])
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(StylesListComponent);
    component = fixture.componentInstance;
    formBuilderFacade = TestBed.inject(FormBuilderFacade);
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init fields', () => {
    component.ngOnInit();
  });

  it('should call changeStyle', () => {
    const event: {styles: AvailableStyles, index: number } = {
      styles: {},
      index: 1
    };
    component.changeStyle(event);
    expect(formBuilderFacade.changeStyle).toHaveBeenCalled();
  });
});
