import {Component} from '@angular/core';
import {AuthFacade} from "../../../store/auth/facades/auth.facade";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isAuthenticated$ = this.authFacade.isAuthenticated$;

  constructor(
    private authFacade: AuthFacade
  ) {
  }
}
