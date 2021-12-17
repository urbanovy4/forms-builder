import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formBuilderFeatureName, State, adapter} from "../states/form-builder.state";

export const featureSelector = createFeatureSelector<State>(formBuilderFeatureName);

const {selectAll} = adapter.getSelectors();

export const fields = createSelector(
  featureSelector,
  selectAll
);

export const selectedField = createSelector(
  featureSelector,
  state => state
);

export const forms = createSelector(
  featureSelector,
  state => state
);

export const selectedForm = createSelector(
  featureSelector,
  state => state
);

export const selectedFieldIndex = createSelector(
  featureSelector,
  state => state
);
