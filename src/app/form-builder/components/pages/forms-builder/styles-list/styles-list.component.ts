import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesListComponent {
}
