import {NgModule} from "@angular/core";
import {FormBuilderComponentModule} from "./components/form-builder-component.module";
import {FormBuilderRoutingModule} from "./form-builder-routing.module";

@NgModule({
  imports: [FormBuilderComponentModule, FormBuilderRoutingModule]
})
export class FormBuilderModule {

}
