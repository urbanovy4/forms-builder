import {Component, OnInit} from '@angular/core';
import {AppState} from "../../../store/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IFormField} from "../../../shared/models/model";

@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss']
})
export class StylesListComponent implements OnInit {

  selectedField: Observable<IFormField> = this.store.select(state => state.formBuilder.selectedField);

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

}
