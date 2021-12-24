import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {FormField} from "../../../../helpers/models/model";
import {Observable} from "rxjs";
import {CdkPortal, TemplatePortal} from "@angular/cdk/portal";
import {AuthFacade} from "../../../store/auth/facades/auth.facade";
import {FieldsTemplateFacade} from "../../../store/fields-templates/facades/fields-template.facade";
import {FormBuilderFacade} from "../../../store/form-builder/facades/form-builder.facade";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true}) portal: TemplatePortal;

  defaultFields$: Observable<FormField[]>;
  isAuthenticated$: Observable<boolean>;
  fields$: Observable<FormField[]>;
  userId$: Observable<number>;

  constructor(
    private fieldsTemplateFacade: FieldsTemplateFacade,
    private authFacade: AuthFacade,
    private formBuilderFacade: FormBuilderFacade
  ) {
    this.setAuthUserData();
  }

  ngOnInit(): void {
    this.defaultFields$ = this.fieldsTemplateFacade.defaultFields$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.userId$ = this.authFacade.userId$;
    this.fields$ = this.formBuilderFacade.fields$;
    this.fieldsTemplateFacade.getDefaultFields();
  }

  private setAuthUserData() {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.authFacade.setToken(potentialToken);
      this.authFacade.setUserId(+potentialUserId);
    }
  }

  ngOnDestroy() {
    // this.formBuilderFacade.deselectField();
  }

  openSaveWindow(fields, userId) {
    this.formBuilderFacade.showSaveDialog(fields, userId);
  }

}
