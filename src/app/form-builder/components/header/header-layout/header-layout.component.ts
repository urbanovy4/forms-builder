import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent  {

  @Input() isAuthenticated: boolean;
  @Output() signOut = new EventEmitter();

}
