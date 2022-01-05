import {TestBed, waitForAsync} from "@angular/core/testing";
import {Store} from "@ngrx/store";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {State} from "../states/form-builder.state";
import {FormBuilderFacade} from "./form-builder.facade";
import * as FormBuilderActions from './../actions/form-builder.action';
import {AvailableStyles, BorderStyles, FormField} from "../../../../helpers/models/model";

describe('FormBuilderFacade', () => {
  let store: Store<State>;
  let facade: FormBuilderFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()]
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(FormBuilderFacade);
  }));

  it('should call deselectField', () => {
    facade.deselectField();
    const action = FormBuilderActions.deselectField();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call clearFormBuilderState', () => {
    facade.clearFormBuilderState();
    const action = FormBuilderActions.clearFormBuilderState();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call addField', () => {
    const mockField: FormField = {
      availableStyles: {
        required: true,
        color: {
          rgba: 'rgba(0, 0, 1, 0)',
          r: 0,
          g: 0,
          b: 1,
          a: 0,
          hex: '#000001',
          roundA: 1
        },
        borderStyle: BorderStyles.Dashed,
        fontWeight: '400',
        height: '100px',
        placeholder: 'Field',
        fontSize: '24px',
        width: '300px'
      },
      id: 1,
      icon: 'fa fa-submit',
      label: 'Test1',
      type: 'text'
    };
    facade.addField(mockField);
    const action = FormBuilderActions.addField({field: mockField});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call moveField', () => {
    const mockFieldArr: FormField[] = [
      {
        availableStyles: {
          required: true,
          color: {
            rgba: 'rgba(0, 0, 1, 0)',
            r: 0,
            g: 0,
            b: 1,
            a: 0,
            hex: '#000001',
            roundA: 1
          },
          borderStyle: BorderStyles.Dashed,
          fontWeight: '400',
          height: '100px',
          placeholder: 'Field',
          fontSize: '24px',
          width: '300px'
        },
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      },
      {
        availableStyles: {
          required: true,
          color: {
            rgba: 'rgba(0, 0, 1, 0)',
            r: 0,
            g: 0,
            b: 1,
            a: 0,
            hex: '#000001',
            roundA: 1
          },
          borderStyle: BorderStyles.Dashed,
          fontWeight: '400',
          height: '100px',
          placeholder: 'Field',
          fontSize: '24px',
          width: '300px'
        },
        id: 2,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      }
    ];
    facade.moveField(mockFieldArr);
    const action = FormBuilderActions.moveFieldInArray({fields: mockFieldArr});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call selectField', () => {
    const index: number = 1;
    const mockField: FormField = {
      availableStyles: {
        required: true,
        color: {
          rgba: 'rgba(0, 0, 1, 0)',
          r: 0,
          g: 0,
          b: 1,
          a: 0,
          hex: '#000001',
          roundA: 1
        },
        borderStyle: BorderStyles.Dashed,
        fontWeight: '400',
        height: '100px',
        placeholder: 'Field',
        fontSize: '24px',
        width: '300px'
      },
      id: 2,
      icon: 'fa fa-submit',
      label: 'Test1',
      type: 'text'
    };
    facade.selectField({field: mockField, index});
    const action = FormBuilderActions.selectField({field: mockField, index});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call removeField', () => {
    const mockFieldArr: FormField[] = [
      {
        availableStyles: {
          required: true,
          color: {
            rgba: 'rgba(0, 0, 1, 0)',
            r: 0,
            g: 0,
            b: 1,
            a: 0,
            hex: '#000001',
            roundA: 1
          },
          borderStyle: BorderStyles.Dashed,
          fontWeight: '400',
          height: '100px',
          placeholder: 'Field',
          fontSize: '24px',
          width: '300px'
        },
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      }
    ];
    facade.removeField(mockFieldArr);
    const action = FormBuilderActions.removeField({fields: mockFieldArr});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call changeStyle', () => {
    const index: number = 1;
    const styles: AvailableStyles = {
      required: true,
      color: {
        rgba: 'rgba(0, 0, 1, 0)',
        r: 0,
        g: 0,
        b: 1,
        a: 0,
        hex: '#000001',
        roundA: 1
      },
      borderStyle: BorderStyles.Dashed,
      fontWeight: '400',
      height: '100px',
      placeholder: 'Field',
      fontSize: '24px',
      width: '300px'
    }
    facade.changeStyle(styles, index);
    const action = FormBuilderActions.changeStyle({styles, index});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showSaveDialog', () => {
    const fields: FormField[] = [
      {
        availableStyles: {
          required: true,
          color: {
            rgba: 'rgba(0, 0, 1, 0)',
            r: 0,
            g: 0,
            b: 1,
            a: 0,
            hex: '#000001',
            roundA: 1
          },
          borderStyle: BorderStyles.Dashed,
          fontWeight: '400',
          height: '100px',
          placeholder: 'Field',
          fontSize: '24px',
          width: '300px'
        },
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      }
    ];
    const userId: number = 1;

    facade.showSaveDialog(fields, userId);
    const action = FormBuilderActions.showSaveDialog({fields, userId});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call saveForm', () => {
    const formName: string = 'Test'
    const fields: FormField[] = [
      {
        availableStyles: {
          required: true,
          color: {
            rgba: 'rgba(0, 0, 1, 0)',
            r: 0,
            g: 0,
            b: 1,
            a: 0,
            hex: '#000001',
            roundA: 1
          },
          borderStyle: BorderStyles.Dashed,
          fontWeight: '400',
          height: '100px',
          placeholder: 'Field',
          fontSize: '24px',
          width: '300px'
        },
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      }
    ];
    const userId: number = 1;

    facade.saveForm(formName, fields, userId);
    const action = FormBuilderActions.saveForm({formName, fields, userId});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
