import {
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef, OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormField} from "../../../../helpers/models/model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/states/app.state";
import {Observable, Subscription} from "rxjs";
import {deselectField, getDefaultFields, saveForm, showSaveDialog} from "../../../../store/actions/forms.actions";
import {authSelector} from "../../../../store/reducers/filds-template.reducer";
import {CdkPortal, DomPortal, Portal, TemplatePortal} from "@angular/cdk/portal";
import {copy} from "../../../../helpers/utils/utils";
import {FormsService} from "../../../../helpers/services/forms.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SaveDialogComponent} from "../../dialogs/save-dialog/save-dialog.component";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true}) portal: TemplatePortal;

  private subscription: Subscription = new Subscription();

  defaultFields: Observable<FormField[]> = this.store.select(authSelector);
  // fields$: Observable<FormField[]> = this.store.select(state => state.formBuilder.fields);
  // userId$: Observable<number> = this.store.select(state => state.auth.userId);
  fields$: Observable<any>
  userId$: Observable<any>
  userId: number;
  fields: FormField[] = [];

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getDefaultFields());
    this.getFields();
    this.getUserId();
  }

  private getFields() {
    this.subscription.add(
      this.fields$.subscribe(fields => {
        this.fields = copy(fields);
      })
    );
  }

  private getUserId() {
    this.subscription.add(
      this.userId$.subscribe(id => {
        this.userId = id;
      })
    );
  }


  ngOnDestroy() {
    this.store.dispatch(deselectField());
    this.subscription.unsubscribe();
  }

  openSaveWindow() {
    this.store.dispatch(showSaveDialog({fields: this.fields, userId: this.userId}))
  }

}
