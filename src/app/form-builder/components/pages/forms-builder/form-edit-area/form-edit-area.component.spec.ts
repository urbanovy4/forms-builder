import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAreaComponent } from './form-edit-area.component';
import {FormBuilderFacade} from "../../../../store/form-builder/facades/form-builder.facade";
import {ReactiveComponentModule} from "@ngrx/component";
import {CdkDrag, CdkDragDrop} from "@angular/cdk/drag-drop";
import {FormField} from "../../../../../helpers/models/model";

describe('FormEditAreaComponent', () => {
  let component: FormEditAreaComponent;
  let fixture: ComponentFixture<FormEditAreaComponent>;
  let formBuilderFacade: FormBuilderFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
      declarations: [ FormEditAreaComponent ],
      providers: [
        {
          provide: FormBuilderFacade,
          useValue: jasmine.createSpyObj('FormBuilderFacade', [''])
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditAreaComponent);
    component = fixture.componentInstance;
    formBuilderFacade = TestBed.inject(FormBuilderFacade);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onInit', () => {
  //   component.ngOnInit();
  // });

  // it('should call onDrop', () => {
    // const event: CdkDragDrop<FormField[]> = {containe};
    // component.ngOnInit();
    // component.onDrop()
  // });
});
