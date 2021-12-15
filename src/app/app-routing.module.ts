import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/components/auth/login/login.component";
import {RegisterComponent} from "./pages/components/auth/register/register.component";
import {AuthComponent} from "./pages/components/auth/auth.component";
import {FormBuilderComponent} from "./pages/components/forms-builder/form-builder.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {UserFormsComponent} from "./pages/components/user-forms/user-forms.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent,},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: 'forms-builder', component: FormBuilderComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-forms', component: UserFormsComponent, canActivate: [AuthGuard]
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
