import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormActions from '../actions/fields.actions';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {FormBuilderService} from "../../shared/services/form-builder.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class FormEditEffects {
  private duration: number = 3000;

  constructor(
    private actions: Actions,
    private formBuildService: FormBuilderService,
    private snackBar: MatSnackBar
  ) {
  }

  getDefaultFields$ = createEffect(() => this.actions
    .pipe(
      ofType(FormActions.getDefaultFields),
      switchMap(() => {
        return this.formBuildService.getDefaultFields()
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

  saveForm$ = createEffect(() => this.actions
    .pipe(
      ofType(FormActions.saveForm),
      switchMap(({fields, userId, formName}) => {
        return this.formBuildService.saveForm(fields, userId, formName)
          .pipe(
            map(() => {
              return FormActions.saveFormSuccess({message: 'Form has been successfully created'})
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormActions.saveFormFailure({error: error.statusText}));
            })
          )
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
          })
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
          })
        })
      ),
    {dispatch: false}
  );
}
