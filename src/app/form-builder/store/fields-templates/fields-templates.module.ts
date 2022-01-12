import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "../../components/form-builder-component.module";
import {EffectsModule} from "@ngrx/effects";
import {FieldsTemplateEffect} from "./effects/fields-template.effect";
import {StoreModule} from "@ngrx/store";
import {fieldTemplatesFeatureName} from './states/fields-template.state'
import {fieldsTemplateReducer} from "./reducers/fields-template.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(fieldTemplatesFeatureName, fieldsTemplateReducer),
    EffectsModule.forFeature([FieldsTemplateEffect]),
    FormBuilderComponentModule
  ]
})
export class FieldsTemplatesModule {

}
