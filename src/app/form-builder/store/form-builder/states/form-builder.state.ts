import { FormField } from '../../../../helpers/models/model';

export const featureName = 'formBuilder';

export interface State {
  selectedField: FormField,
  selectedFieldIndex: number,
  fields: FormField[],
  error: string
}

export const initialState: State = {
  selectedField: null,
  selectedFieldIndex: null,
  fields: [],
  error: null
};
