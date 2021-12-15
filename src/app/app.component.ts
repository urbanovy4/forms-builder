import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/states/app.state";
import {setToken, setUserId} from "./store/actions/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'forms-builder';

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.setAuthUserData();
  }

  private setAuthUserData() {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.store.dispatch(setToken({accessToken: potentialToken}));
      this.store.dispatch(setUserId({userId: +potentialUserId}));
    }
  }
}
