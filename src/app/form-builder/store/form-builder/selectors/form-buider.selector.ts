import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formBuilderFeatureName, State} from "../states/form-builder.state";

export const featureSelector = createFeatureSelector<State>(formBuilderFeatureName);

export const defaultFields = createSelector(
  featureSelector,
  state => state.defaultFields
);

export const fields = createSelector(
  featureSelector,
  state => state
);

export const selectedField = createSelector(
  featureSelector,
  state => state.selectedField
);

export const forms = createSelector(
  featureSelector,
  state => state.forms
);

export const selectedForm = createSelector(
  featureSelector,
  state => state.selectedForm
);

export const selectedFieldIndex = createSelector(
  featureSelector,
  state => state.index
);
