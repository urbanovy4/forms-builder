import {Component, Input, OnInit} from '@angular/core';
import {IFormField} from "../../../../shared/models/model";

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../form-edit-area.component.scss']
})
export class FormEditAreaLayoutComponent implements OnInit {

  @Input('formFieldList') formFieldList: IFormField[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
