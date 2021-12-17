import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "./components/form-builder-component.module";
import {FormBuilderRoutingModule} from "./form-builder-routing.module";
import {FormBuilderStoreModule} from "./store/form-builder-store.module";
import {AuthStoreModule} from "./store/auth/auth-store.module";

@NgModule({
  imports: [FormBuilderStoreModule, FormBuilderComponentModule, AuthStoreModule, FormBuilderRoutingModule],
})
export class FormBuilderModule {
}
