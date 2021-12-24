import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/states/app.state";
import {removeForm} from "../../../store/user-forms/actions/user-forms.action";
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";

@Component({
  selector: 'app-remove-form-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { formId: number },
    private userFormsFacade: UserFormsFacade
  ) {
  }

  remove() {
    this.userFormsFacade.removeForm(this.data.formId);
  }

}
