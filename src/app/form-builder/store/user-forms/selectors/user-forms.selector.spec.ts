import {adapter, featureName, initialState, State as UserFormsState} from "../states/user-forms.state";
import * as UserFormsSelectors from './user-forms.selector';
import {Form} from "../../../../helpers/models/model";

interface State {
  [featureName]: UserFormsState
}

describe('UserFormsSelectors', () => {
  it('should call selectors', () => {
    const forms: Form[] = [
      {
        id: 1,
        userId: 1,
        fields: [],
        formName: 'Test1'
      },
      {
        id: 2,
        userId: 1,
        fields: [],
        formName: 'Test2'
      },
      {
        id: 3,
        userId: 1,
        fields: [],
        formName: 'Test3'
      }
    ];
    const state: State = {
      [featureName]: adapter.addMany(forms, {
        ...initialState,
        loading: true,
        selectedFormId: 1
      })
    };

    expect(UserFormsSelectors.getSelectedId(state)).toEqual(state.userForms.selectedFormId);
    expect(UserFormsSelectors.loading(state)).toEqual(state.userForms.loading);
    expect(UserFormsSelectors.form(state)).toEqual(forms[0]);
  })
});
