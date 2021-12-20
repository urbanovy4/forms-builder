import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserFormsActions from '../actions/user-forms.action';
import {catchError, map, switchMap} from "rxjs/operators";
import {Form} from "../../../../helpers/models/model";
import * as FormEditActions from "../../../../store/actions/forms.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {UserFormsService} from "../../../../helpers/services/user-forms.service";

@Injectable()
export class UserFormEffect {
  constructor(
    private actions: Actions,
    private userFormsService: UserFormsService
  ) {
  }

  getForms$ = createEffect(() => this.actions
    .pipe(
      ofType(UserFormsActions.getForms),
      switchMap(({userId}) => {
        return this.userFormsService.getForms(userId)
          .pipe(
            map((forms: Form[]) => {
              return UserFormsActions.getFormsSuccess({forms})
            }),
            catchError((error: HttpErrorResponse) => {
              return of(UserFormsActions.getFormsFailure({error: error.statusText}))
            })
          );
      })
    )
  );
}
