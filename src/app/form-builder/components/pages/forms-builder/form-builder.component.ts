import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';

import { AvailableStyles, FormField } from '../../../../helpers/models/model';
import { AuthFacade } from '../../../store/auth/facades/auth.facade';
import { FieldsTemplateFacade } from '../../../store/fields-templates/facades/fields-template.facade';
import { FormBuilderFacade } from '../../../store/form-builder/facades/form-builder.facade';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true})
  public  portal: TemplatePortal;

  public defaultFields$: Observable<FormField[]>;
  public isAuthenticated$: Observable<boolean>;
  public fields$: Observable<FormField[]>;
  public userId$: Observable<number>;
  public selectedField$: Observable<FormField>;
  public selectedFieldIndex$: Observable<number>;

  constructor(
    private fieldsTemplateFacade: FieldsTemplateFacade,
    private authFacade: AuthFacade,
    private formBuilderFacade: FormBuilderFacade
  ) {
    this.setAuthUserData();
  }

  public ngOnInit(): void {
    this.defaultFields$ = this.fieldsTemplateFacade.defaultFields$;
    this.isAuthenticated$ = this.authFacade.isAuthenticated$;
    this.userId$ = this.authFacade.userId$;
    this.fields$ = this.formBuilderFacade.fields$;
    this.selectedField$ = this.formBuilderFacade.selectedField$;
    this.selectedFieldIndex$ = this.formBuilderFacade.selectedFieldIndex$;
    this.fieldsTemplateFacade.getDefaultFields();
  }

  private setAuthUserData(): void {
    const potentialToken: string = localStorage.getItem('token');
    const potentialUserId: string = localStorage.getItem('userId');
    if (potentialToken) {
      this.authFacade.setToken(potentialToken);
      this.authFacade.setUserId(+potentialUserId);
    }
  }

  public openSaveWindow(fields, userId): void {
    this.formBuilderFacade.showSaveDialog(fields, userId);
  }

  public changeStyle(event: { styles: AvailableStyles, index: number }): void {
    this.formBuilderFacade.changeStyle(event.styles, event.index);
  }

}
