import {featureName, initialState, State as FormBuilderState} from "./../states/form-builder.state";
import * as FormBuilderSelectors from './form-buider.selector';

interface State {
  [featureName]: FormBuilderState
}

describe('FormBuilderSelector', () => {
  it('should calls form builder selectors', () => {
    const state: State = {
      [featureName]: {
        ...initialState
      }
    };

    expect(FormBuilderSelectors.fields(state)).toEqual(state.formBuilder.fields);
    expect(FormBuilderSelectors.selectedField(state)).toEqual(state.formBuilder.selectedField);
    expect(FormBuilderSelectors.selectedFieldIndex(state)).toEqual(state.formBuilder.selectedFieldIndex);
  });
});
