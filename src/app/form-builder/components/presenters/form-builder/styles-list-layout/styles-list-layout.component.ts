import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AvailableStyles, BorderStyles, FormField } from '../../../../../helpers/models/model';

@Component({
  selector: 'app-styles-list-layout',
  templateUrl: './styles-list-layout.component.html',
  styleUrls: ['./styles-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesListLayoutComponent {

  @Input('selectedField')
  public selectedField: FormField;
  @Input('index')
  public index: number;
  @Output()
  public activeStyles: EventEmitter<{ styles: AvailableStyles, index: number }> = new EventEmitter<{ styles: AvailableStyles, index: number }>();

  public borderStyles = BorderStyles;
  public stylesForm: FormGroup;

  constructor() {
    this.initForm();
  }

  private initForm(): void {
    this.stylesForm = new FormGroup({
      width: new FormControl(null, [Validators.min(200), Validators.max(700)]),
      height: new FormControl(null, [Validators.min(20), Validators.max(150)]),
      borderStyle: new FormControl(''),
      fontSize: new FormControl(null, [Validators.min(12), Validators.max(42)]),
      fontWeight: new FormControl(null, [Validators.min(100), Validators.max(900)]),
      color: new FormControl(''),
      placeholder: new FormControl('', [Validators.maxLength(40)]),
      required: new FormControl(false),
    });
  }

  public onSubmit(): void {
    this.updateFieldValue();
    this.activeStyles.emit({styles: this.stylesForm.value, index: this.index});
  }

  public isCheckbox(): boolean {
    return this.selectedField.type === 'checkbox';
  }

  public isButton(): boolean {
    return this.selectedField.type === 'button';
  }

  private updateFieldValue(): void {
    for (const field in this.stylesForm.value) {
      if (typeof this.stylesForm.value[field] === 'number' && field !== 'fontWeight') {
        this.stylesForm.value[field] = this.stylesForm.value[field] + 'px';
      }
    }
  }

}
