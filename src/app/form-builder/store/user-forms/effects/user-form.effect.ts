import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserFormsActions from '../actions/user-forms.action';
import {catchError, delay, map, switchMap, tap} from "rxjs/operators";
import {Form} from "../../../../helpers/models/model";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {UserFormsService} from "../../../../helpers/services/user-forms/user-forms.service";
import {RemoveDialogComponent} from "../../../components/dialogs/remove-dialog/remove-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {EditDialogComponent} from "../../../components/dialogs/edit-dialog/edit-dialog.component";
import {PreviewDialogComponent} from "../../../components/dialogs/preview-dialog/preview-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class UserFormEffect {
  private duration: number = 3000;
  private removeDialogRef: MatDialogRef<RemoveDialogComponent>;
  private editDialogRef: MatDialogRef<EditDialogComponent>;
  private previewDialogRef: MatDialogRef<PreviewDialogComponent>;

  constructor(
    private actions: Actions,
    private userFormsService: UserFormsService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  getForms$ = createEffect(() => this.actions
    .pipe(
      ofType(UserFormsActions.getForms),
      delay(200),
      switchMap(({userId}) => {
        return this.userFormsService.getForms(userId)
          .pipe(
            map((forms: Form[]) => {
              return UserFormsActions.getFormsSuccess({forms});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(UserFormsActions.getFormsFailure({error: error.statusText}));
            })
          );
      })
    )
  );

  removeForm$ = createEffect(() => this.actions
    .pipe(
      ofType(UserFormsActions.removeForm),
      switchMap(({formId}) => {
        return this.userFormsService.removeForm(formId)
          .pipe(
            map(() => {
              return UserFormsActions.removeFormSuccess({formId});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(UserFormsActions.removeFormFailure({error: error.message}));
            })
          )
      })
    )
  );

  removeFormSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(UserFormsActions.removeFormSuccess),
        tap(() => {
          this.removeDialogRef.close();
          this.snackbar.open('The form has been successfully removed', null, {
            duration: this.duration
          });
        })
      ),
    {dispatch: false}
  );

  editForm$ = createEffect(() => this.actions
    .pipe(
      ofType(UserFormsActions.editForm),
      switchMap(({form}) => {
        return this.userFormsService.editForm(form)
          .pipe(
            map(() => {
              return UserFormsActions.editFormSuccess({form});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(UserFormsActions.editFormFailure({error: error.message}));
            })
          );
      })
    ),
  );

  editFormSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(UserFormsActions.editFormSuccess),
        tap(() => {
          this.editDialogRef.close();
          this.snackbar.open('Form has been edited', null, {
            duration: this.duration
          });
        })
      ),
    {dispatch: false}
  );

  showRemoveDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(UserFormsActions.showRemoveDialog),
        tap(({formId}) => {
          this.removeDialogRef = this.dialog.open(RemoveDialogComponent, {
            data: {formId}
          })
        })
      ),
    {dispatch: false}
  );

  showEditDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(UserFormsActions.showEditDialog),
        tap(({form}) => {
          this.editDialogRef = this.dialog.open(EditDialogComponent, {
            width: '300px',
            data: {form}
          })
        })
      ),
    {dispatch: false}
  );

  showPreviewDialog$ = createEffect(() => this.actions
      .pipe(
        ofType(UserFormsActions.showPreviewDialog),
        tap(({form}) => {
          this.previewDialogRef = this.dialog.open(PreviewDialogComponent, {
            data: form,
            maxHeight: '60vh',
            maxWidth: '50vw',
            minWidth: '30vw'
          });
        })
      ),
    {dispatch: false}
  );
}
