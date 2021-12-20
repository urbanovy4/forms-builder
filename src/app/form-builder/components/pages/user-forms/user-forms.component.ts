import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/states/app.state";
import {Observable, Subscription} from "rxjs";
import {Form} from "../../../../helpers/models/model";
import {UserFormsFacade} from "../../../store/user-forms/facades/user-forms.facade";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  forms$: Observable<Form[]>;
  isAuthenticated$: Observable<boolean>;
  userId$: Observable<number>;
  userId: number;

  selectedForm: Form;

  constructor(
    private userFormsFacade: UserFormsFacade,
    private authFacade: AuthFacade
  ) {
    this.setAuthUserData();
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.forms$ = this.userFormsFacade.forms$;
    this.userId$ = this.authFacade.userId$;
    this.getUserIdValue();
    this.getForms(this.userId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getForms(userId: number) {
    this.userFormsFacade.getForms(userId)
    // this.store.dispatch(getForms({userId}));
  }

  selectForm(selectedForm: Form) {
    // this.selectedForm = selectedForm;
    // this.store.dispatch(selectForm({selectedForm}))
  }

  removeForm(formId: number) {
    // this.store.dispatch(showRemoveDialog({formId}));
  }

  private getUserIdValue() {
    this.subscription.add(
      this.userId$.subscribe(id => {
        this.userId = id;
      })
    );
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
