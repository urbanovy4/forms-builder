import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from "../../../store/app.state";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {AvailableStyles, IFormField} from "../../../shared/models/model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss']
})
export class StylesListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  selectedField: Observable<IFormField> = this.store.select(state => state.formBuilder.selectedField);
  form: FormGroup;
  field: IFormField;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.subscription = this.selectedField.subscribe(field => {
      this.field = {...field};
    });
  }

  ngOnDestroy() {
    console.log(this.form.value);
    this.subscription.unsubscribe();
  }

  save(activeStyles: AvailableStyles) {
    console.log(activeStyles)
  }

}
