import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, fieldTemplatesFeatureName, adapter } from '../states/fields-template.state';

/**
 * Field templates selectors
 */

const getFieldsTemplateState = createFeatureSelector<State>(fieldTemplatesFeatureName);
const {selectAll} = adapter.getSelectors();

export const defaultFields = createSelector(
  getFieldsTemplateState,
  selectAll
);
