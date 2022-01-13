import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

import { FieldsType, FormField } from '../../../../../helpers/models/model';

@Component({
  selector: 'app-form-edit-area-layout',
  templateUrl: './form-edit-area-layout.component.html',
  styleUrls: ['./form-edit-area-layout.component.scss', '../../../pages/forms-builder/form-edit-area/form-edit-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEditAreaLayoutComponent implements OnChanges {

  public fieldsType = FieldsType;

  @Input('formFieldList')
  public formFieldList: FormField[];

  @Output()
  public selectField: EventEmitter<{ field: FormField, index: number }> = new EventEmitter<{ field: FormField, index: number }>();
  @Output()
  public deleteField: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();
  @Output()
  public deletedFieldIndex: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  public updatedIndex: EventEmitter<number> = new EventEmitter<number>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['formFieldList']) {
      this.formFieldList = [...changes['formFieldList'].currentValue];
    }
  }

  public emitSelectedField(formField: FormField, index: number): void {
    const field = {...formField};
    field.selected = true;
    this.selectField.emit({field, index});
  }

  public removeField(index: number): void {
    this.formFieldList.splice(index, 1);
    this.deleteField.emit(this.formFieldList);
    this.deletedFieldIndex.emit(index);
    this.updateIndex();
  }

  private updateIndex(): void {
    const field = this.formFieldList.find((field) => field.selected === true);
    this.updatedIndex.emit(this.formFieldList.indexOf(field));
  }

}
