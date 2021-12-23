import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {FormField} from "../../../../helpers/models/model";

export const fieldTemplatesFeatureName = 'field-templates';

export interface State extends EntityState<FormField> {
  error?: string;
}

export const adapter = createEntityAdapter<FormField>();

export const initialState: State = adapter.getInitialState({
  error: null,
});
