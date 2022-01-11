import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Form, FormField} from "../../../../helpers/models/model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent {

  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Form,
    private fb: FormBuilder
  ) {
    this.initForm();
    this.filterFormFields();
  }

  private initForm() {
    this.form = this.fb.group({
      text: this.fb.array([]),
      textarea: this.fb.array([]),
      button: this.fb.array([]),
      checkbox: this.fb.array([]),
      select: this.fb.array([])
    });
  }

  private filterFormFields() {
    this.data.fields.forEach(field => {
      if (field.type === 'text') {
        (<FormArray>this.form.controls['text'] as FormArray).push(new FormControl(field))
      }
      if (field.type === 'textarea') (<FormArray>this.form.controls['textarea']).push(new FormControl(field));
      if (field.type === 'button') (<FormArray>this.form.controls['button']).push(new FormControl(field));
      if (field.type === 'checkbox') (<FormArray>this.form.controls['checkbox']).push(new FormControl(field));
      if (field.type === 'select') (<FormArray>this.form.controls['select']).push(new FormControl(field));
    })
  }

  getFormControls(controlName: string): FormField[] {
    return this.form.controls[controlName].value as FormField[];
  }

  fakeSubmit() {
    console.log(this.form.controls);
  }

}
