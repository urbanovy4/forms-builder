import {
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef, OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IFormField} from "../../shared/models/model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {getDefaultFields} from "../../store/actions/form-builder.actions";
import {authSelector} from "../../store/reducers/filds-template.reducer";
import {DomPortal, Portal, TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  defaultFields: Observable<IFormField[]> = this.store.select(authSelector);
  selectedField: IFormField;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getDefaultFields());
  }

  ngOnDestroy() {
    // this.domPortal.detach();
  }

  selectField(field: IFormField) {
    this.selectedField = field;
    this.attachStylePortal();
  }

  attachStylePortal() {

  }
}
