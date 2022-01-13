import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilderFacade } from '../../../store/form-builder/facades/form-builder.facade';
import { FormField } from '../../../../helpers/models/model';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { fields: FormField[], userId: number },
    private formBuilderFacade: FormBuilderFacade
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public save(): void {
    const {fields, userId} = this.data;
    this.formBuilderFacade.saveForm(this.form.value.formName, fields, userId);
    this.clearFormBuilderState();
  }

  private clearFormBuilderState(): void {
    this.formBuilderFacade.clearFormBuilderState();
  }

  private initForm(): void {
    this.form = new FormGroup({
      formName: new FormControl('', [Validators.required])
    });
  }
}
