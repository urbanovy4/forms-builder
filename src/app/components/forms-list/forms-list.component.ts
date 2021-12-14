import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Form} from "../../shared/models/model";

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsListComponent {

  @Input('forms') forms: Form[];
  @Output() selectedForm = new EventEmitter<Form>();

  selectForm(form: Form) {
    this.selectedForm.emit(form);
  }

}
