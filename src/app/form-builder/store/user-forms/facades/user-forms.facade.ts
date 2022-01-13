import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Form } from '../../../../helpers/models/model';
import { forms, loading } from '../selectors/user-forms.selector';
import {
  editForm,
  getForms, removeForm,
  selectForm,
  showEditDialog,
  showPreviewDialog,
  showRemoveDialog
} from '../actions/user-forms.action';

@Injectable({
  providedIn: 'root'
})
export class UserFormsFacade {

  forms$: Observable<Form[]> = this.store.pipe(select(forms));
  loading$: Observable<boolean> = this.store.pipe(select(loading));

  constructor(
    private store: Store
  ) {
  }

  /**
   * Get forms
   * @param userId
   */
  getForms(userId: number) {
    this.store.dispatch(getForms({userId}));
  }

  /**
   * Select form
   * @param selectedForm
   */
  selectForm(selectedForm: Form) {
    this.store.dispatch(selectForm({selectedForm}));
  }

  /**
   * Edit form
   * @param form
   */
  editForm(form: Form) {
    this.store.dispatch(editForm({form}));
  }

  /**
   * Remove form
   * @param formId
   */
  removeForm(formId: number) {
    this.store.dispatch(removeForm({formId}));
  }

  /**
   * Show preview dialog
   * @param form
   */
  showPreviewDialog(form: Form) {
    this.store.dispatch(showPreviewDialog({form}));
  }

  /**
   * Show edit dialog
   * @param form
   */
  showEditDialog(form: Form) {
    this.store.dispatch(showEditDialog({form}));
  }

  /**
   * Show remove dialog
   * @param formId
   */
  showRemoveDialog(formId: number) {
    this.store.dispatch(showRemoveDialog({formId}));
  }
}
