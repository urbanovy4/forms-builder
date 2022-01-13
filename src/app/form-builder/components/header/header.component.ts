import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AuthFacade } from '../../store/auth/facades/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input()
  public isAuthenticated: boolean = false;

  constructor(
    private authFacade: AuthFacade
  ) {
  }

  public signOut(): void {
    this.authFacade.signOut();
  }

}
