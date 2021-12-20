import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormField} from "../../../../../helpers/models/model";

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../../../pages/forms-builder/form-edit-area/form-edit-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditAreaLayoutComponent {

  formFieldList: FormField[];

  @Input('formFieldList')
  set fields(fields: FormField[]) {
    this.formFieldList = [...fields];
  }

  @Output() selectField: EventEmitter<{ field: FormField, index: number }> = new EventEmitter<{ field: FormField, index: number }>();
  @Output() changeFormList: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();

  selectedField(field: FormField, index: number) {
    this.selectField.emit({field, index});
  }

  removeField(event: MouseEvent, index: number) {
    event.stopPropagation();
    this.formFieldList.splice(index, 1);
    this.changeFormList.emit(this.formFieldList);
  }

}
