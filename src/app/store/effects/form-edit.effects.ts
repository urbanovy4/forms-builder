import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormEditActions from '../actions/form-builder.actions';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {FormBuilderService} from "../../shared/services/form-builder.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

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
      switchMap((data) => {
        return this.formBuildService.getDefaultFields()
          .pipe(
            map((value) => {
              return FormEditActions.getDefaultFieldsSuccess({defaultFields: value});
            }),
            catchError(({error}) => {
              return of(FormEditActions.getDefaultFieldsFailure(error))
            })
          )
      })
    )
  );

  getDefaultFieldsSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(FormEditActions.getDefaultFieldsSuccess),
        tap(() => {
        })
      ),
    {dispatch: false}
  );

}
