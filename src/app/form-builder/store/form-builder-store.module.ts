import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {formBuilderReducer} from "./form-builder/reducers/form-builder.reducer";
import {formBuilderFeatureName} from "./form-builder/states/form-builder.state";
import {FormBuilderComponentModule} from "../components/form-builder-component.module";
import {EffectsModule} from "@ngrx/effects";
import {FormBuilderEffect} from "./form-builder/effects/form-builder.effect";

@NgModule({
  imports: [
    StoreModule.forFeature(formBuilderFeatureName, formBuilderReducer),
    EffectsModule.forFeature([FormBuilderEffect]),
    FormBuilderComponentModule
  ]
})
export class FormBuilderStoreModule {
}
