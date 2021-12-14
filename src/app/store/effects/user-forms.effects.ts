import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserActions from '../actions/user-forms.actions'
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {UserFormsService} from "../../shared/services/user-forms.service";
import {Form, IFormField} from "../../shared/models/model";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class UserFormsEffects {
  constructor(
    private actions: Actions,
    private userFormsService: UserFormsService
  ) {
  }

  getForms$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getForms),
      switchMap(({userId}) => {
        return this.userFormsService.getForms(userId)
          .pipe(
            map((forms: Form[]) => {
              return UserActions.getFormsSuccess({forms})
            }),
            catchError((error: HttpErrorResponse) => {
              return of(UserActions.getFormsFailure({error: error.statusText}))
            })
          )
      })
    )
  );


  getFormsFailure$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getFormsFailure),
      tap()
    ),
    {dispatch: false}
  );

}
