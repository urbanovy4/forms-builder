import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {FormField} from "../../../../helpers/models/model";
import {Observable, Subscription} from "rxjs";
import {CdkPortal, TemplatePortal} from "@angular/cdk/portal";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {FieldsTemplateFacade} from "../../../store/fields-templates/facades/fields-template.facade";

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
    private fieldsTemplateFacade: FieldsTemplateFacade,
    private authFacade: AuthFacade
  ) {
    this.setAuthUserData();
  }

  ngOnInit(): void {
    this.defaultFields$ = this.fieldsTemplateFacade.defaultFields$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.fieldsTemplateFacade.getDefaultFields();
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
    // this.formBuilderFacade.deselectField();
    this.subscription.unsubscribe();
  }

  openSaveWindow() {
    // this.store.dispatch(showSaveDialog({fields: this.fields, userId: this.userId}))
  }

}
