import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FieldsTemplateEffect } from './effects/fields-template.effect';
import { fieldTemplatesFeatureName } from './states/fields-template.state'
import { fieldsTemplateReducer } from './reducers/fields-template.reducer';
import { FormBuilderComponentModule } from '../../components/form-builder-component.module';

@NgModule({
  imports: [
    StoreModule.forFeature(fieldTemplatesFeatureName, fieldsTemplateReducer),
    EffectsModule.forFeature([FieldsTemplateEffect]),
    FormBuilderComponentModule
  ]
})
export class FieldsTemplatesModule {

}
