import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserFormsFacade } from '../../../store/user-forms/facades/user-forms.facade';

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

  public remove(): void {
    this.userFormsFacade.removeForm(this.data.formId);
  }

}
