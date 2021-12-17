import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "../../components/form-builder-component.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    // StoreModule.forFeature(),
    EffectsModule.forFeature([]),
    FormBuilderComponentModule
  ]
})
export class UserFormsModule {

}
