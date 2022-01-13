import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import { FieldsType, Form } from '../../../../helpers/models/model';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent {

  public fieldsType = FieldsType;
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Form
  ) { }

}
