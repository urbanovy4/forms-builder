import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormField} from "../../../../../helpers/models/model";

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../../../pages/forms-builder/form-edit-area/form-edit-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditAreaLayoutComponent {

  @Input('formFieldList') formFieldList: FormField[];
  @Output() selectField = new EventEmitter<number>();
  @Output() changeFormList = new EventEmitter<number>();

  selectedField(index: number) {
    this.selectField.emit(index);
  }

  removeField(index: number, id: number) {
    this.formFieldList.splice(index, 1);
    this.changeFormList.emit(id);
  }

}
