import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AvailableStyles, FormField} from "../../../../../helpers/models/model";
import {FormBuilderFacade} from "../../../../store/form-builder/facades/form-builder.facade";


@Component({
  selector: 'app-styles-list',
  templateUrl: './styles-list.component.html',
  styleUrls: ['./styles-list.component.scss']
})
export class StylesListComponent implements OnInit {

  selectedField$: Observable<FormField>;
  selectedFieldIndex$: Observable<number>;

  constructor(
    private formBuilderFacade: FormBuilderFacade
  ) {
  }

  ngOnInit() {
    this.selectedField$ = this.formBuilderFacade.selectedField$;
    this.selectedFieldIndex$ = this.formBuilderFacade.selectedFieldIndex$;
  }

  changeStyle(styles: AvailableStyles) {
    this.formBuilderFacade.changeStyle(styles);
    // this.store.dispatch(changeStyle({
    //   styles,
    //   index: this.index
    // }));
  }
}
