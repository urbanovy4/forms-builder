import {NgModule} from "@angular/core";
import {PortalModule} from "@angular/cdk/portal";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    DragDropModule
  ],
  exports: [
    PortalModule,
    DragDropModule
  ]
})
export class CdkModule {
}
