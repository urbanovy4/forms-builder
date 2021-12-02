import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss', './../login.component.scss'],
})
export class LoginLayoutComponent {

  form: FormGroup;

  @Input('parentForm')
  set parentForm(form) {
    this.form = form
  }
}
