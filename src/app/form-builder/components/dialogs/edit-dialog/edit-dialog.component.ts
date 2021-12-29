import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Form} from "../../../../helpers/models/model";
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userFormFacade: UserFormsFacade,
    @Inject(MAT_DIALOG_DATA) private data: { form: Form }
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  edit() {
    const formName = this.form.get('formName').value;
    this.userFormFacade.editForm({...this.data.form, formName});
  }

  private initForm() {
    const {formName} = this.data.form;
    this.form = new FormGroup({
      formName: new FormControl(formName, [Validators.required])
    });
  }

}
