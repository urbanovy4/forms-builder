import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {Observable, Subscription} from "rxjs";
import {getForms, selectForm} from "../../../store/actions/user-forms.actions";
import {Form} from "../../../shared/models/model";

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  userId$: Observable<number> = this.store.select<number>(state => state.auth.userId);
  forms$: Observable<Form[]> = this.store.select<Form[]>(state => state.userForms.forms);

  userId: number;
  selectedForm: Form;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getForms(this.userId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUserId() {
    this.subscription.add(
      this.userId$.subscribe(id => {
        this.userId = id;
      })
    );
  }

  getForms(userId: number) {
    this.store.dispatch(getForms({userId}));
  }

  selectForm(selectedForm: Form) {
    this.selectedForm = selectedForm;
    this.store.dispatch(selectForm({selectedForm}))
  }
}
