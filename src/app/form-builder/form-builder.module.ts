import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "./components/form-builder-component.module";
import {FormBuilderRoutingModule} from "./form-builder-routing.module";
import {FormBuilderStoreModule} from "./store/form-builder/form-builder-store.module";
import {AuthStoreModule} from "./store/auth/auth-store.module";
import {FieldsTemplatesModule} from "./store/fields-templates/fields-templates.module";
import {UserFormsStoreModule} from "./store/user-forms/user-forms-store.module";

@NgModule({
  imports: [
    FormBuilderStoreModule,
    FieldsTemplatesModule,
    FormBuilderComponentModule,
    AuthStoreModule,
    UserFormsStoreModule,
    FormBuilderRoutingModule
  ],
})
export class FormBuilderModule {
}
