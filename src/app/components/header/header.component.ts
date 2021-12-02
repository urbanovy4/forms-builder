import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {signOut} from "../../store/actions/auth.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated = this.store.select(state => state.auth.isAuthenticated);

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.store.dispatch(signOut());
  }

}
