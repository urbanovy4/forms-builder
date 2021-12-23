import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adapter, State, featureName} from "../states/user-forms.state";

export const userFormFeatureSelector = createFeatureSelector<State>(featureName);

const {selectAll, selectEntities} = adapter.getSelectors();

export const forms = createSelector(
  userFormFeatureSelector,
  selectAll
);

export const getFormEntity = createSelector(
  userFormFeatureSelector,
  selectEntities
);

export const getSelectedId = createSelector(
  userFormFeatureSelector,
  state => state.selectedFormId
);

export const form = createSelector(
  getSelectedId,
  getFormEntity,
  (id, entities) => entities[id]
);

export const loading = createSelector(
  userFormFeatureSelector,
  state => state.loading
);
