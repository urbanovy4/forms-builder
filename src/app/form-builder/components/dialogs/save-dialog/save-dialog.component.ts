import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/states/app.state";
import {saveForm} from "../../../../store/actions/forms.actions";

@Component({
  selector: 'app-save-form',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    const {fields, userId} = this.data;
    this.store.dispatch(saveForm({formName: this.form.value.formName, fields, userId}));
  }


  private initForm() {
    this.form = new FormGroup({
      formName: new FormControl('', [Validators.required])
    });
  }
}
