import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Form} from "../../../../helpers/models/model";

export const featureName = 'user-forms';

export interface State extends EntityState<Form> {
  selectedFormId?: number;
}

export const adapter = createEntityAdapter<Form>();

export const initialState = adapter.getInitialState({
  selectedFormId: null
});
