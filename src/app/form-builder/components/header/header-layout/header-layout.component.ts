import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLayoutComponent {

  @Input()
  public isAuthenticated: boolean;
  @Output()
  public signOut = new EventEmitter();

}
