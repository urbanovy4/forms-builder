import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AuthComponent} from "./components/auth/auth.component";
import {FormBuilderComponent} from "./components/form-builder/form-builder.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {FbLayoutComponent} from "./components/form-builder/fb-layout/fb-layout.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent , children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent,},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: '', component: FormBuilderComponent, canActivate: [AuthGuard], children: [
      {
        path: 'form-builder', component: FbLayoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
