import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {AuthComponent} from './components/auth/auth.component';
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {ReactiveComponentModule} from "@ngrx/component";
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/app.state';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {HeaderLayoutComponent} from './components/header/header-layout/header-layout.component';
import {LoginLayoutComponent} from './components/auth/login/login-layout/login-layout.component';
import {RegisterLayoutComponent} from './components/auth/register/register-layout/register-layout.component';
import {AuthEffects} from "./store/effects/auth.effects";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {FieldsTemplateComponent} from './components/form-builder/fields-template/fields-template.component';
import {StylesListComponent} from './components/form-builder/styles-list/styles-list.component';
import {FormEditAreaComponent} from './components/form-builder/form-edit-area/form-edit-area.component';
import {TokenInterceptor} from "./shared/services/token.interceptor";
import {MatListModule} from "@angular/material/list";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormEditEffects} from "./store/effects/form-edit.effects";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {PortalModule} from "@angular/cdk/portal";
import {FormEditAreaLayoutComponent} from './components/form-builder/form-edit-area/form-edit-area-layout/form-edit-area-layout.component';
import {StylesListLayoutComponent} from "./components/form-builder/styles-list/styles-list-layout/styles-list-layout.component";
import {EnumToArrayPipe} from './shared/pipes/enum-to-array.pipe';
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS
} from '@angular-material-components/color-picker';
import {UserFormsComponent} from './pages/user-forms/user-forms.component';
import {UserFormsEffects} from "./store/effects/user-forms.effects";
import { FormsListComponent } from './components/forms-list/forms-list.component';
import { SelectedFormComponent } from './components/selected-form/selected-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    HeaderComponent,
    HeaderLayoutComponent,
    LoginLayoutComponent,
    RegisterLayoutComponent,
    FormBuilderComponent,
    FieldsTemplateComponent,
    StylesListComponent,
    FormEditAreaComponent,
    FormEditAreaLayoutComponent,
    StylesListLayoutComponent,
    EnumToArrayPipe,
    UserFormsComponent,
    FormsListComponent,
    SelectedFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    AppRoutingModule,
    PortalModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveComponentModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AuthEffects, FormEditEffects, UserFormsEffects]),
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxMatColorPickerModule
  ],
  providers: [
    {provide: 'API_URL', useValue: environment.apiUrl},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
