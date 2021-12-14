import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {signOut} from "../../store/actions/auth.actions";
import {clearFieldState} from "../../store/actions/fields.actions";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: Observable<boolean> = this.store.select<boolean>(state => state.auth.isAuthenticated);

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
