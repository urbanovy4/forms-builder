import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormEditActions from '../actions/form-builder.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {FormBuilderService} from "../../shared/services/form-builder.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class FormEditEffects {
  constructor(
    private actions: Actions,
    private formBuildService: FormBuilderService
  ) {
  }

  getDefaultFields$ = createEffect(() => this.actions
    .pipe(
      ofType(FormEditActions.getDefaultFields),
      switchMap(() => {
        return this.formBuildService.getDefaultFields()
          .pipe(
            map((fields) => {
              return FormEditActions.getDefaultFieldsSuccess({defaultFields: fields});
            }),
            catchError((error: HttpErrorResponse) => {
              console.log(error)
              return of(FormEditActions.getDefaultFieldsFailure({error: error.statusText}))
            })
          )
      })
    )
  );
}
