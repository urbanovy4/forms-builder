import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FormBuilderService} from "../../../../helpers/services/form-builder/form-builder.service";
import * as FormBuilderActions from "../../fields-templates/actions/fields-template.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class FieldsTemplateEffect {
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

}
