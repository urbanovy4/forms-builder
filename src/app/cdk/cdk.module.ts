import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';

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
