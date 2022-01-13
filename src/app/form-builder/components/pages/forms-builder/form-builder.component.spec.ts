import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderFacade } from '../../../store/form-builder/facades/form-builder.facade';
import { AuthFacade } from '../../../store/auth/facades/auth.facade';
import { FieldsTemplateFacade } from '../../../store/fields-templates/facades/fields-template.facade';
import { FormField } from '../../../../helpers/models/model';
import { MaterialModule } from '../../../../material/material.module';

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;
  let fbFacade: FormBuilderFacade;
  let templatesFacade: FieldsTemplateFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponentModule, MaterialModule],
      declarations: [FormBuilderComponent],
      providers: [
        {
          provide: FormBuilderFacade,
          useValue: jasmine.createSpyObj('FormBuilderFacade', [
            'showSaveDialog',
          ])
        },
        {
          provide: FieldsTemplateFacade,
          useValue: jasmine.createSpyObj('FieldsTemplateFacade', ['getDefaultFields'])
        },
        {
          provide: AuthFacade,
          useValue: jasmine.createSpyObj('AuthFacade', ['setToken', 'setUserId'])
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fbFacade = TestBed.inject(FormBuilderFacade);
    templatesFacade = TestBed.inject(FieldsTemplateFacade);
    localStorage.setItem('token', 'TestToken');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showSaveDialog', () => {
    const fields: FormField[] = [];
    const userId: number = 1;
    component.ngOnInit();
    component.openSaveWindow(fields, userId);
    expect(fbFacade.showSaveDialog).toHaveBeenCalled();
  });
});
