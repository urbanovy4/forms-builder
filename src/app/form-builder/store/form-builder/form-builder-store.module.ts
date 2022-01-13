import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { formBuilderReducer } from './reducers/form-builder.reducer';
import { featureName } from './states/form-builder.state';
import { FormBuilderComponentModule } from '../../components/form-builder-component.module';
import { FormBuilderEffect } from './effects/form-builder.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, formBuilderReducer),
    EffectsModule.forFeature([FormBuilderEffect]),
    FormBuilderComponentModule
  ]
})
export class FormBuilderStoreModule {
}
