import {
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef, OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IFormField} from "../../../shared/models/model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {Observable, Subscription} from "rxjs";
import {deselectField, getDefaultFields, saveForm} from "../../../store/actions/fields.actions";
import {authSelector} from "../../../store/reducers/filds-template.reducer";
import {CdkPortal, DomPortal, Portal, TemplatePortal} from "@angular/cdk/portal";
import {copy} from "../../../shared/utils/utils";
import {FormBuilderService} from "../../../shared/services/form-builder.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @ViewChild(CdkPortal, {static: true}) portal: TemplatePortal;

  private subscription: Subscription = new Subscription();

  defaultFields: Observable<IFormField[]> = this.store.select(authSelector);
  fields$: Observable<IFormField[]> = this.store.select(state => state.formBuilder.fields);
  userId$: Observable<number> = this.store.select(state => state.auth.userId);
  userId: number;
  fields: IFormField[] = [];
  form: FormGroup;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getDefaultFields());
    this.getFields();
    this.getUserId();
    this.initForm();
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

  private initForm() {
    this.form = new FormGroup({
      formName: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy() {
    this.store.dispatch(deselectField());
    this.subscription.unsubscribe();
  }

  saveForm() {
    this.store.dispatch(saveForm({fields: this.fields, userId: this.userId, formName: this.form.value.formName}));
    this.form.reset();
  }

}
