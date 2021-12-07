import {Component, Input} from '@angular/core';
import {IFormField} from "../../../shared/models/model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.scss', '../form-builder.component.scss']
})
export class FieldsListComponent {

  @Input('defaultFields') defaultFields: IFormField[];

  onDrop(event: CdkDragDrop<any>) {
  }
}
