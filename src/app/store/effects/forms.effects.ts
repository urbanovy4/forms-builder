import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormActions from '../actions/forms.actions';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {FormsService} from "../../helpers/services/forms.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SaveDialogComponent} from "../../form-builder/components/dialogs/save-dialog/save-dialog.component";
import {RemoveDialogComponent} from "../../form-builder/components/dialogs/remove-dialog/remove-dialog.component";
import * as FormEditActions from "../actions/forms.actions";
import {Form} from "../../helpers/models/model";

@Injectable()
export class FormsEffects {
  private duration: number = 3000;
  private saveDialogRef: MatDialogRef<SaveDialogComponent>;
  private removeDialogRef: MatDialogRef<RemoveDialogComponent>;

  constructor(
    private actions: Actions,
    private formsService: FormsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  getDefaultFields$ = createEffect(() => this.actions
    .pipe(
      ofType(FormActions.getDefaultFields),
      switchMap(() => {
        return this.formsService.getDefaultFields()
          .pipe(
            map((fields) => {
              return FormActions.getDefaultFieldsSuccess({defaultFields: fields});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormActions.getDefaultFieldsFailure({error: error.statusText}))
            })
          )
      })
    )
  );

  getForms$ = createEffect(() => this.actions
    .pipe(
      ofType(FormEditActions.getForms),
      switchMap(({userId}) => {
        return this.formsService.getForms(userId)
          .pipe(
            map((forms: Form[]) => {
              return FormEditActions.getFormsSuccess({forms})
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormActions.getFormsFailure({error: error.statusText}))
            })
          );
      })
    )
  );

  saveForm$ = createEffect(() => this.actions
    .pipe(
      ofType(FormActions.saveForm),
      switchMap(({fields, userId, formName}) => {
        return this.formsService.saveForm(fields, userId, formName)
          .pipe(
            map(() => {
              return FormActions.saveFormSuccess({message: 'Form has been successfully created'});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormActions.saveFormFailure({error: error.statusText}));
            })
          )
      })
    )
  );

  removeForm$ = createEffect(() => this.actions
    .pipe(
      ofType(FormActions.removeForm),
      switchMap(({formId}: any) => {
        return this.formsService.removeForm(formId)
          .pipe(
            map(() => {
              return FormActions.removeFormSuccess({formId});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormActions.removeFormFailure({error: error.statusText}))
            })
          );
      })
    ),
  );

  saveFormSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.saveFormSuccess),
        tap(({message}) => {
          this.snackBar.open(message, null, {
            duration: this.duration,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          this.saveDialogRef.close();
        })
      ),
    {dispatch: false}
  );

  saveFormFailure$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.saveFormFailure),
        tap(({error}) => {
          this.snackBar.open(error, null, {
            duration: this.duration,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        })
      ),
    {dispatch: false}
  );

  removeFormSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.removeFormSuccess),
        tap(() => {
          console.log(1)
          this.removeDialogRef.close();
          this.snackBar.open('Removed success', null, {
            duration: this.duration
          });
        })
      ),
    {dispatch: false}
  );

  removeFormFailure$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.removeFormFailure),
        tap(({error}) => {
          this.snackBar.open(error, null, {
            duration: this.duration
          })
        })
      ),
    {dispatch: false}
  );

  showSaveDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.showSaveDialog),
        tap(({fields, userId}) => {
          this.saveDialogRef = this.dialog.open(SaveDialogComponent, {
            data: {fields, userId}
          })
        })
      ),
    {dispatch: false}
  );

  showRemoveDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(FormActions.showRemoveDialog),
        tap(({formId}) => {
          this.removeDialogRef = this.dialog.open(RemoveDialogComponent, {
            data: {formId}
          })
        })
      ),
    {dispatch: false}
  );
}
