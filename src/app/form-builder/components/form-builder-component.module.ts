import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLayoutComponent } from './header/header-layout/header-layout.component';
import { FormBuilderComponent } from './pages/forms-builder/form-builder.component';
import { FieldsTemplateComponent } from './presenters/form-builder/fields-template/fields-template.component';
import { StylesListComponent } from './pages/forms-builder/styles-list/styles-list.component';
import { FormEditAreaComponent } from './pages/forms-builder/form-edit-area/form-edit-area.component';
import {
  FormEditAreaLayoutComponent
} from './presenters/form-builder/form-edit-area-layout/form-edit-area-layout.component';
import { StylesListLayoutComponent } from './presenters/form-builder/styles-list-layout/styles-list-layout.component';
import { EnumToArrayPipe } from '../../helpers/pipes/enum-to-array.pipe';
import { UserFormsComponent } from './pages/user-forms/user-forms.component';
import { FormsListComponent } from './presenters/user-forms/forms-list/forms-list.component';
import { AuthLayoutComponent } from './presenters/auth-layout/auth-layout.component';
import { SaveDialogComponent } from './dialogs/save-dialog/save-dialog.component';
import { FormsListItemComponent } from './presenters/user-forms/forms-list-item/forms-list-item.component';
import { RemoveDialogComponent } from './dialogs/remove-dialog/remove-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { CdkModule } from '../../cdk/cdk.module';
import { AuthGuard } from '../../helpers/guards/auth.guard';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { PreviewDialogComponent } from './dialogs/preview-dialog/preview-dialog.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLayoutComponent,
    FormBuilderComponent,
    FieldsTemplateComponent,
    StylesListComponent,
    FormEditAreaComponent,
    FormEditAreaLayoutComponent,
    StylesListLayoutComponent,
    EnumToArrayPipe,
    UserFormsComponent,
    FormsListComponent,
    SaveDialogComponent,
    FormsListItemComponent,
    RemoveDialogComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    AuthLayoutComponent,
    EditDialogComponent,
    PreviewDialogComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    MaterialModule,
    CdkModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    HeaderLayoutComponent,
    FormBuilderComponent,
    FieldsTemplateComponent,
    StylesListComponent,
    FormEditAreaComponent,
    FormEditAreaLayoutComponent,
    StylesListLayoutComponent,
    EnumToArrayPipe,
    UserFormsComponent,
    FormsListComponent,
    SaveDialogComponent,
    FormsListItemComponent,
    RemoveDialogComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    AuthLayoutComponent
  ],
  entryComponents: [
    HeaderComponent,
    HeaderLayoutComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class FormBuilderComponentModule {
}
