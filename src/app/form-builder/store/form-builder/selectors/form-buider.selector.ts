import {createFeatureSelector, createSelector} from "@ngrx/store";
import {featureName, State} from "../states/form-builder.state";

/**
 * Form builder selector
 */

export const getFormBuilderState = createFeatureSelector<State>(featureName);

export const featureSelector = createFeatureSelector<State>(featureName);

export const getAllFields = createSelector(
  featureSelector,
  state => state.fields
);

export const getSelectedField = createSelector(
  featureSelector,
  state => state.selectedField
);

export const selectedFieldIndex = createSelector(
  featureSelector,
  state => state.selectedFieldIndex
);
