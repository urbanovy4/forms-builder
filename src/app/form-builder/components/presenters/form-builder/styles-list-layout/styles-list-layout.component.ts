import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AvailableStyles, BorderStyles, FormField} from "../../../../../helpers/models/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-styles-list-layout',
  templateUrl: './styles-list-layout.component.html',
  styleUrls: ['./styles-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesListLayoutComponent {

  @Input('selectedField') selectedField: FormField;
  @Input('index') index: number;
  @Output() activeStyles: EventEmitter<{ styles: AvailableStyles, index: number }> = new EventEmitter<{ styles: AvailableStyles, index: number }>();
  borderStyles = BorderStyles;
  stylesForm: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.stylesForm = new FormGroup({
      width: new FormControl('', [Validators.min(200), Validators.max(700)]),
      height: new FormControl('', [Validators.min(20), Validators.max(150)]),
      borderStyle: new FormControl(''),
      fontSize: new FormControl('', [Validators.min(12), Validators.max(42)]),
      fontWeight: new FormControl('', [Validators.min(100), Validators.max(900)]),
      color: new FormControl(''),
      placeholder: new FormControl('', [Validators.maxLength(40)]),
      required: new FormControl(false),
    });
  }

  onSubmit() {
    this.activeStyles.emit({styles: this.stylesForm.value, index: this.index});
  }

  isCheckbox() {
    return this.selectedField.type === 'checkbox';
  }

  isButton() {
    return this.selectedField.type === 'button';
  }

}
