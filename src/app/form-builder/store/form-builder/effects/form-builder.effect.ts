import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FormBuilderActions from '../actions/form-builder.action';
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {FormBuilderService} from "../../../../helpers/services/form-builder.service";

@Injectable()
export class FormBuilderEffect {
  constructor(
    private actions: Actions,
    private formBuilderService: FormBuilderService
  ) {
  }

  getDefaultFields$ = createEffect(() => this.actions
    .pipe(
      ofType(FormBuilderActions.getDefaultFields),
      switchMap(() => {
        return this.formBuilderService.getDefaultFields()
          .pipe(
            map(defaultFields => {
              return FormBuilderActions.getDefaultFieldsSuccess({defaultFields})
            }),
            catchError((error: HttpErrorResponse) => {
              return of(FormBuilderActions.getDefaultFieldsFailure({error: error.statusText}))
            })
          )
      })
    )
  );

  // .pipe(
  //     ofType(FormBuilderActions.getDefaultFields),
  //     switchMap(() => {
  //       return this.formsService.getDefaultFields()
  //         .pipe(
  //           map((fields) => {
  //             return FormBuilderActions.getDefaultFieldsSuccess({defaultFields: fields});
  //           }),
  //           catchError((error: HttpErrorResponse) => {
  //             return of(FormBuilderActions.getDefaultFieldsFailure({error: error.statusText}))
  //           })
  //         )
  //     })
  //   )


}
