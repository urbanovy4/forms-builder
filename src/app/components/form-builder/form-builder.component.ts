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
import {deselectField, getDefaultFields} from "../../store/actions/form-builder.actions";
import {authSelector} from "../../store/reducers/filds-template.reducer";
import {CdkPortal, DomPortal, Portal, TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true}) portal: TemplatePortal;

  defaultFields: Observable<IFormField[]> = this.store.select(authSelector);

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getDefaultFields());
  }

  ngOnDestroy() {
    this.store.dispatch(deselectField());
  }

}
