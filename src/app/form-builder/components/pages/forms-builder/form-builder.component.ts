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
import {FormBuilderService} from "../../../../helpers/services/form-builder.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SaveDialogComponent} from "../../dialogs/save-dialog/save-dialog.component";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {FormBuilderFacade} from "../../../store/form-builder/facades/form-builder.facade";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true}) portal: TemplatePortal;

  private subscription: Subscription = new Subscription();

  defaultFields$: Observable<FormField[]>;
  isAuthenticated$: Observable<boolean>;

  // fields$: Observable<FormField[]> = this.store.select(states => states.formBuilder.fields);
  // userId$: Observable<number> = this.store.select(states => states.auth.userId);
  fields$: Observable<any>
  userId$: Observable<any>
  userId: number;
  fields: FormField[] = [];

  constructor(
    private formBuilderFacade: FormBuilderFacade,
    private authFacade: AuthFacade
  ) {
    this.setAuthUserData();
  }

  ngOnInit(): void {
    this.defaultFields$ = this.formBuilderFacade.defaultFields$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.formBuilderFacade.getDefaultFields();
    // this.getFields();
    // this.getUserId();
  }

  private setAuthUserData() {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.authFacade.setToken(potentialToken);
      this.authFacade.setUserId(+potentialUserId);
    }
  }

  private getFields() {
    // this.subscription.add(
    //   this.fields$.subscribe(fields => {
    //     this.fields = copy(fields);
    //   })
    // );
  }

  private getUserId() {
    // this.subscription.add(
    //   this.userId$.subscribe(id => {
    //     this.userId = id;
    //   })
    // );
  }


  ngOnDestroy() {
    this.formBuilderFacade.deselectField();
    this.subscription.unsubscribe();
  }

  openSaveWindow() {
    // this.store.dispatch(showSaveDialog({fields: this.fields, userId: this.userId}))
  }

}
