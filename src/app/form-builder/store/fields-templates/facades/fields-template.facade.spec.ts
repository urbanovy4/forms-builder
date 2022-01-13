import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { FieldsTemplateFacade } from './fields-template.facade';
import { State } from '../states/fields-template.state';
import * as FieldsTemplateActions from '../actions/fields-template.actions';

describe('FieldsTemplateFacade', () => {
  let store: Store<State>;
  let facade: FieldsTemplateFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()]
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(FieldsTemplateFacade);
  }));

  it('should call getDefaultFields', () => {
    facade.getDefaultFields();
    const action = FieldsTemplateActions.getDefaultFields();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
