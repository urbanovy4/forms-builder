import {Component, Input, OnInit} from '@angular/core';
import {AuthFacade} from "../../store/auth/facades/auth.facade";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isAuthenticated?: boolean = false;

  constructor(
    private authFacade: AuthFacade
  ) {
  }

  signOut() {
    this.authFacade.signOut();
  }

}
