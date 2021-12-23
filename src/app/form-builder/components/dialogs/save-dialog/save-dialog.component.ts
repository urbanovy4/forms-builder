import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilderFacade} from "../../../store/form-builder/facades/form-builder.facade";

@Component({
  selector: 'app-save-form',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilderFacade: FormBuilderFacade
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    const {fields, userId} = this.data;
    this.formBuilderFacade.saveForm(this.form.value.formName, fields, userId);
    this.formBuilderFacade.clearFormBuilderState();
  }


  private initForm() {
    this.form = new FormGroup({
      formName: new FormControl('', [Validators.required])
    });
  }
}
