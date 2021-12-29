import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {featureName} from "./states/auth.state";
import {authReducer} from "./reducers/auth.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffect} from "./effects/auth.effect";
import {FormBuilderComponentModule} from "../../components/form-builder-component.module";

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, authReducer),
    EffectsModule.forFeature([AuthEffect]),
    FormBuilderComponentModule
  ]
})
export class AuthStoreModule {
}
