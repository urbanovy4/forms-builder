import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IFormField} from "../../shared/models/model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {getDefaultFields} from "../../store/actions/form-edit.action";
import {authSelector} from "../../store/reducers/form-builder.reducer";
import {Portal, TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, AfterViewChecked {

  @ViewChild('dragContent') dragContent: TemplateRef<unknown>;
  @ViewChild('styleList') styleList: TemplateRef<unknown>;

  defaultFields: Observable<IFormField[]> = this.store.select(authSelector);
  selectedField: IFormField;
  selectedPortal: Portal<any>;
  templatePortal: TemplatePortal;

  constructor(
    private store: Store<AppState>,
    private _viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getDefaultFields());
  }

  ngAfterViewChecked() {
    this.templatePortal = new TemplatePortal(this.dragContent, this._viewContainerRef);
    this.selectedPortal = this.templatePortal
  }

  selectField(field: IFormField) {
    this.selectedField = field;
  }

}
