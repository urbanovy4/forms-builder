import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Form} from "../../../../helpers/models/model";

@Component({
  selector: 'app-selected-form',
  templateUrl: './selected-form.component.html',
  styleUrls: ['./selected-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedFormComponent {

  @Input('selectedForm') selectedForm: Form;

}
