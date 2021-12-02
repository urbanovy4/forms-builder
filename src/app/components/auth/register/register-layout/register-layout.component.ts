import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss', './../register.component.scss'],
})
export class RegisterLayoutComponent {

  form: FormGroup;

  @Input('parentForm')
  set parentForm(form) {
    this.form = form
  }
}
