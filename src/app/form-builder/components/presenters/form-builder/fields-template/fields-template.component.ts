import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormField } from '../../../../../helpers/models/model';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-template.component.html',
  styleUrls: ['./fields-template.component.scss', '../../../pages/forms-builder/form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsTemplateComponent {

  @Input('defaultFields')
  public defaultFields: FormField[];

  public noReturnPredicate(): boolean {
    return false;
  }
}
