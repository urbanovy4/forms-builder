import {Form, FormField} from "../../../../helpers/models/model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const formBuilderFeatureName = 'form-builder';

export interface State extends EntityState<FormField>{
  selectedField: FormField;
  index: number;
  forms: Form[];
  selectedForm: Form;
  defaultFields: FormField[];
  error: string;
}

// export const initialState: State = {
//   defaultFields: [],
//   fields: [],
//   selectedField: null,
//   index: null,
//   forms: [],
//   selectedForm: null,
//   error: null
// }

export const adapter = createEntityAdapter<FormField>()

export const initialState: State = adapter.getInitialState({
  defaultFields: [],
  selectedField: null,
  index: null,
  forms: [],
  selectedForm: null,
  error: null
})
