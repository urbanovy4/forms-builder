import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/pages/auth/auth.component";
import {LoginComponent} from "./components/pages/auth/login/login.component";
import {RegisterComponent} from "./components/pages/auth/register/register.component";
import {FormBuilderComponent} from "./components/pages/forms-builder/form-builder.component";

const routes: Routes = [

  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }


  // {
  //   path: '', component: AuthComponent, children: [
  //     {path: '', redirectTo: '/login', pathMatch: 'full'},
  //     {path: 'login', component: LoginComponent,},
  //     {path: 'register', component: RegisterComponent},
  //   ]
  // },
  // {
  //   path: 'forms-builder', component: FormBuilderComponent, canActivate: [AuthGuard]
  // },
  // {
  //   path: 'user-forms', component: UserFormsComponent, canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule {
}
