import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/app.state";
import {setToken} from "./store/actions/auth.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'forms-builder';

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    const potentialToken: string = localStorage.getItem('token');
    if (potentialToken) {
      this.store.dispatch(setToken({accessToken: potentialToken}));
    }
  }
}
