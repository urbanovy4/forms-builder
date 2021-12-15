import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from "../../../../../store/states/app.state";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {AvailableStyles, FormField} from "../../../../../helpers/models/model";
import {changeStyle} from "../../../../../store/actions/forms.actions";


@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss']
})
export class StylesListComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  private index: number;

  // selectedField$: Observable<FormField> = this.store.select(state => state.formBuilder.selectedField);
  // selectedFieldIndex$: Observable<number> = this.store.select(state => state.formBuilder.index);
  selectedField$: Observable<FormField>;
  selectedFieldIndex$: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.subscription.add(
      this.selectedFieldIndex$
        .subscribe(index => {
          this.index = index;
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeStyle(styles: AvailableStyles) {
    this.store.dispatch(changeStyle({
      styles,
      index: this.index
    }));
  }
}
