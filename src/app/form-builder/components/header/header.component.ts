import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/states/app.state";
import {signOut} from "../../../store/actions/auth.actions";
import {clearFieldState} from "../../../store/actions/forms.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public isAuthenticated: Observable<boolean> = this.store.select<boolean>(state => state.auth.isAuthenticated);

  public isAuthenticated = false

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.store.dispatch(signOut());
    this.store.dispatch(clearFieldState());
  }

}
