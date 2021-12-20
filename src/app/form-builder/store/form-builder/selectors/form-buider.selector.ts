import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formBuilderFeatureName, State} from "../states/form-builder.state";

export const featureSelector = createFeatureSelector<State>(formBuilderFeatureName);

export const fields = createSelector(
  featureSelector,
  state => state.fields
);

export const selectedField = createSelector(
  featureSelector,
  state => state.selectedField
);

export const selectedFieldIndex = createSelector(
  featureSelector,
  state => state.selectedFieldIndex
);
