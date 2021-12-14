import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IFormField} from "../../../shared/models/model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-template.component.html',
  styleUrls: ['./fields-template.component.scss', '../form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsTemplateComponent {

  @Input('defaultFields') defaultFields: IFormField[];


  noReturnPredicate() {
    return false
  }
}
