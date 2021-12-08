import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFormField} from "../../../../shared/models/model";
import {TemplatePortal} from "@angular/cdk/portal";
import {Observable} from "rxjs";
import {PortalService} from "../../../../shared/services/portal.service";

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../form-edit-area.component.scss']
})
export class FormEditAreaLayoutComponent implements OnInit {

  @Input('formFieldList') formFieldList: IFormField[];
  @Output() selectedField = new EventEmitter<IFormField>();

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  selectField(field: IFormField) {
    this.selectedField.emit(field);
  }

}
