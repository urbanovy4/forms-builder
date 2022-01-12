import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';
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
  @Output() deletedFieldIndex: EventEmitter<number> = new EventEmitter<number>();
  @Output() updatedIndex: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formFieldList']) {
      this.formFieldList = [...changes['formFieldList'].currentValue];
    }
  }

  emitSelectedField(formField: FormField, index: number) {
    const field = {...formField};
    field.selected = true;
    this.selectField.emit({field, index});
  }

  removeField(index: number) {
    this.formFieldList.splice(index, 1);
    this.deleteField.emit(this.formFieldList);
    this.deletedFieldIndex.emit(index);
    this.updateIndex();
  }

  private updateIndex() {
    const field = this.formFieldList.find((field) => field.selected === true);
    this.updatedIndex.emit(this.formFieldList.indexOf(field));
  }

}
