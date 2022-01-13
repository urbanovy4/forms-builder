import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Form } from '../../../../../helpers/models/model';

@Component({
  selector: 'app-forms-list-item',
  templateUrl: './forms-list-item.component.html',
  styleUrls: ['./forms-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsListItemComponent {

  @Input() form: Form;
  @Output() selectedForm = new EventEmitter<Form>();
  @Output() remove = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Form>();

}
