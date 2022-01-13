import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Form } from '../../../../helpers/models/model';
import { UserFormsFacade } from '../../../store/user-forms/facades/user-forms.facade';
import { AuthFacade } from '../../../store/auth/facades/auth.facade';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit, OnDestroy {

  forms$: Observable<Form[]>;
  loading$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  userId$: Observable<number>;

  constructor(
    private userFormsFacade: UserFormsFacade,
    private authFacade: AuthFacade
  ) {
    this.setAuthUserData();
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.forms$ = this.userFormsFacade.forms$;
    this.loading$ = this.userFormsFacade.loading$;
    this.userId$ = this.authFacade.userId$;
    this.getForms();
  }

  ngOnDestroy() {
    this.authFacade.unsubscribe();
  }

  private getForms() {
    this.userId$
      .pipe(
        takeUntil(this.authFacade.notifyToUnsubscribe)
      )
      .subscribe(id => {
        this.userFormsFacade.getForms(id);
      });
  }

  selectForm(selectedForm: Form) {
    this.userFormsFacade.showPreviewDialog(selectedForm);
  }

  removeForm(formId: number) {
    this.userFormsFacade.showRemoveDialog(formId);
  }

  editForm(form: Form) {
    this.userFormsFacade.showEditDialog(form);
  }

  private setAuthUserData() {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.authFacade.setToken(potentialToken);
      this.authFacade.setUserId(+potentialUserId);
    }
  }
}
