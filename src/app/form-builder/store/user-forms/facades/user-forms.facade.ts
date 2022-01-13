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

  public forms$: Observable<Form[]> = this.store.pipe(select(forms));
  public loading$: Observable<boolean> = this.store.pipe(select(loading));

  constructor(
    private store: Store
  ) {
  }

  /**
   * Get forms
   * @param userId
   */
  public getForms(userId: number): void {
    this.store.dispatch(getForms({userId}));
  }

  /**
   * Select form
   * @param selectedForm
   */
  public selectForm(selectedForm: Form): void {
    this.store.dispatch(selectForm({selectedForm}));
  }

  /**
   * Edit form
   * @param form
   */
  public editForm(form: Form): void {
    this.store.dispatch(editForm({form}));
  }

  /**
   * Remove form
   * @param formId
   */
  public removeForm(formId: number): void {
    this.store.dispatch(removeForm({formId}));
  }

  /**
   * Show preview dialog
   * @param form
   */
  public showPreviewDialog(form: Form): void {
    this.store.dispatch(showPreviewDialog({form}));
  }

  /**
   * Show edit dialog
   * @param form
   */
  public showEditDialog(form: Form): void {
    this.store.dispatch(showEditDialog({form}));
  }

  /**
   * Show remove dialog
   * @param formId
   */
  public showRemoveDialog(formId: number): void {
    this.store.dispatch(showRemoveDialog({formId}));
  }
}
