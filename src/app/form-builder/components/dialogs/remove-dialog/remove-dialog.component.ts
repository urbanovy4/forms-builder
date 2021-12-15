import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/states/app.state";
import {removeForm} from "../../../../store/actions/forms.actions";

@Component({
  selector: 'app-remove-form-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  remove() {
    this.store.dispatch(removeForm({formId: this.data.formId}))
  }

}
