import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Subscription} from "rxjs";
import {getForms} from "../../store/actions/user-forms.actions";

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  userId$ = this.store.select(state => state.auth.userId);
  userId: number;

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
}
