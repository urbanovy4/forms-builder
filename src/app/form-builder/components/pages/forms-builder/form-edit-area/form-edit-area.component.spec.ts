import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { BehaviorSubject } from 'rxjs';

import { FormEditAreaComponent } from './form-edit-area.component';
import { FormBuilderFacade } from '../../../../store/form-builder/facades/form-builder.facade';
import { FormField } from '../../../../../helpers/models/model';
import { ContainerModel, DragDropEventFactory } from '../../../../../helpers/factory/drag-drop-event.factory';

describe('FormEditAreaComponent', () => {
  let component: FormEditAreaComponent;
  let fixture: ComponentFixture<FormEditAreaComponent>;
  let formBuilderFacade: FormBuilderFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
      declarations: [FormEditAreaComponent],
      providers: [
        {
          provide: FormBuilderFacade,
          useValue: jasmine.createSpyObj('FormBuilderFacade', [
            'selectField',
            'removeField',
            'moveField',
            'addField',
            'unsubscribe',
            'updateIndex'
          ], {
            'fields$': new BehaviorSubject<FormField[]>([])
          })
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormEditAreaComponent);
    component = fixture.componentInstance;
    formBuilderFacade = TestBed.inject(FormBuilderFacade);
  });


  it('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call selectField', () => {
    const field: FormField = {
      type: 'text',
      id: 1,
      availableStyles: {},
      label: 'Test',
      icon: 'fa fa-icon'
    };
    const index: number = 1;
    component.selectField({field, index});
    expect(formBuilderFacade.selectField).toHaveBeenCalledWith({field, index});
  });

  it('should call removeField', () => {
    const fields: FormField[] = [
      {
        type: 'text',
        id: 1,
        availableStyles: {},
        label: 'Test1',
        icon: 'fa fa-icon'
      },
      {
        type: 'text',
        id: 2,
        availableStyles: {},
        label: 'Test2',
        icon: 'fa fa-icon'
      },
      {
        type: 'text',
        id: 3,
        availableStyles: {},
        label: 'Test3',
        icon: 'fa fa-icon'
      }
    ];
    component.removeField(fields);
    expect(formBuilderFacade.removeField).toHaveBeenCalledWith(fields);
  });

  it('should call onDrop in the one container', () => {
    const formFields: FormField[] = [];
    const event = new DragDropEventFactory().createInContainerEvent(1, formFields, 1, 2);
    component.onDrop(event);
  });

  it('should call onDrop between containers', () => {
    const prevContainerModel: ContainerModel<FormField> = {
      index: 1,
      id: 1,
      data: [
        {
          type: 'text',
          id: 1,
          availableStyles: {},
          label: 'Test1',
          icon: 'fa fa-icon'
        },
        {
          type: 'text',
          id: 1,
          availableStyles: {},
          label: 'Test1',
          icon: 'fa fa-icon'
        }
      ]
    };
    const currentContainerModel: ContainerModel<FormField> = {
      index: 2,
      id: 2,
      data: [
        {
          type: 'text',
          id: 1,
          availableStyles: {},
          label: 'Test1',
          icon: 'fa fa-icon'
        }
      ]
    };
    const event = new DragDropEventFactory().createCrossContainerEvent(prevContainerModel, currentContainerModel);
    component.onDrop(event);
  });
});
