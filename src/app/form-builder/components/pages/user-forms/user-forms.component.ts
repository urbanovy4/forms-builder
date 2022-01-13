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

  public forms$: Observable<Form[]>;
  public loading$: Observable<boolean>;
  public isAuthenticated$: Observable<boolean>;
  public userId$: Observable<number>;

  constructor(
    private userFormsFacade: UserFormsFacade,
    private authFacade: AuthFacade
  ) {
    this.setAuthUserData();
  }

  public ngOnInit(): void {
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.forms$ = this.userFormsFacade.forms$;
    this.loading$ = this.userFormsFacade.loading$;
    this.userId$ = this.authFacade.userId$;
    this.getForms();
  }

  public ngOnDestroy(): void {
    this.authFacade.unsubscribe();
  }

  private getForms(): void {
    this.userId$
      .pipe(
        takeUntil(this.authFacade.notifyToUnsubscribe)
      )
      .subscribe(id => {
        this.userFormsFacade.getForms(id);
      });
  }

  public selectForm(selectedForm: Form): void {
    this.userFormsFacade.showPreviewDialog(selectedForm);
  }

  public removeForm(formId: number): void {
    this.userFormsFacade.showRemoveDialog(formId);
  }

  public editForm(form: Form): void {
    this.userFormsFacade.showEditDialog(form);
  }

  private setAuthUserData(): void {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.authFacade.setToken(potentialToken);
      this.authFacade.setUserId(+potentialUserId);
    }
  }
}
