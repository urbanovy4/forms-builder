import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsListComponent {}
