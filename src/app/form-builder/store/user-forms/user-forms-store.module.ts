import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "../../components/form-builder-component.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {featureName} from "./states/user-forms.state";
import {userFormsReducer} from "./reducers/user-forms.reducer";
import {UserFormEffect} from "./effects/user-form.effect";

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, userFormsReducer),
    EffectsModule.forFeature([UserFormEffect]),
    FormBuilderComponentModule
  ]
})
export class UserFormsStoreModule {
}
