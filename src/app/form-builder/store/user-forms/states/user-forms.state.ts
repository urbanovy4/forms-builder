import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Form} from "../../../../helpers/models/model";

export const featureName = 'userForms';

export interface State extends EntityState<Form> {
  selectedFormId?: number;
  error?: string;
  loading?: boolean;
}

export const adapter = createEntityAdapter<Form>();

export const initialState = adapter.getInitialState({
  selectedFormId: null,
  error: null,
  loading: false
});
