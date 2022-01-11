import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormField} from "../../../../../helpers/models/model";

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../../../pages/forms-builder/form-edit-area/form-edit-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditAreaLayoutComponent implements OnChanges {

  @Input('formFieldList') formFieldList: FormField[];

  @Output() selectField: EventEmitter<{ field: FormField, index: number }> = new EventEmitter<{ field: FormField, index: number }>();
  @Output() deleteField: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();

  ngOnChanges(changes: SimpleChanges) {
    this.formFieldList = [...changes['formFieldList'].currentValue];
  }

  selectedField(field: FormField, index: number) {
    this.selectField.emit({field, index});
  }

  removeField(index: number) {
    this.formFieldList.splice(index, 1);
    this.deleteField.emit(this.formFieldList);
  }

}
