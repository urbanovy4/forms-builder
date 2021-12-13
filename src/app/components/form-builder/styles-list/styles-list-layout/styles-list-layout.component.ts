import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AvailableStyles, BorderStyles, IFormField} from "../../../../shared/models/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-styles-list-layout',
  templateUrl: './styles-list-layout.component.html',
  styleUrls: ['./styles-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesListLayoutComponent {

  @Input('selectedField') selectedField: IFormField;
  @Output() activeStyles: EventEmitter<AvailableStyles> = new EventEmitter<AvailableStyles>();
  borderStyles = BorderStyles;
  stylesForm: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.stylesForm = new FormGroup({
      width: new FormControl('', ),
      height: new FormControl('', ),
      borderStyle: new FormControl(''),
      fontSize: new FormControl('', ),
      fontWeight: new FormControl('', [Validators.min(100), Validators.max(900)]),
      color: new FormControl(''),
      placeholder: new FormControl('', [Validators.maxLength(40)]),
      required: new FormControl(false),
    });
  }

  onSubmit() {
    this.activeStyles.emit(this.stylesForm.value);
    // this.stylesForm.reset();
  }

  isCheckbox() {
    return this.selectedField.type === 'checkbox';
  }

}
