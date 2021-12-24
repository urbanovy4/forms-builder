import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveDialogComponent} from './save-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormField} from "../../../../helpers/models/model";
import {FormBuilderFacade} from "../../../store/form-builder/facades/form-builder.facade";

describe('SaveDialogComponent', () => {
  let component: SaveDialogComponent;
  let fixture: ComponentFixture<SaveDialogComponent>;
  let facade: FormBuilderFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SaveDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: <{ fields: FormField[], userId: number }>{
            fields: [],
            userId: 1
          }
        },
        {
          provide: FormBuilderFacade,
          useValue: jasmine.createSpyObj('FormBuilderFacade', ['saveForm', 'clearFormBuilderState'])
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDialogComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(FormBuilderFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveForm', () => {
    component.ngOnInit();
    component.save();
    expect(facade.saveForm).toHaveBeenCalled();
  });

});
