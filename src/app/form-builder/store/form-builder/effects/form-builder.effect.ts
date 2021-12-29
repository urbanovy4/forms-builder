import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormBuilderActions from '../actions/form-builder.action';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {FormBuilderService} from "../../../../helpers/services/form-builder/form-builder.service";
import {SaveDialogComponent} from "../../../components/dialogs/save-dialog/save-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class FormBuilderEffect {
  private duration: number = 3000;
  private saveDialogRef: MatDialogRef<SaveDialogComponent>;

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilderService: FormBuilderService
  ) {
  }

  saveForm$ = createEffect(() => this.actions
    .pipe(
      ofType(FormBuilderActions.saveForm),
      switchMap(({fields, userId, formName}) => {
        return this.formBuilderService.saveForm(fields, userId, formName)
          .pipe(
            map(() => {
              return FormBuilderActions.saveFormSuccess({message: 'Form has been successfully created'});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormBuilderActions.saveFormFailure({error: error.statusText}));
            })
          )
      })
    )
  );

  saveFormSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(FormBuilderActions.saveFormSuccess),
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
        ofType(FormBuilderActions.saveFormFailure),
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


  showSaveDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(FormBuilderActions.showSaveDialog),
        tap(({fields, userId}) => {
          this.saveDialogRef = this.dialog.open(SaveDialogComponent, {
            data: {fields, userId}
          })
        })
      ),
    {dispatch: false}
  );


}
