import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as UserActions from '../actions/user-forms.actions'
import {catchError, map, switchMap} from "rxjs/operators";
import {UserFormsService} from "../../shared/services/user-forms.service";
import {IFormField} from "../../shared/models/model";
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
          // .pipe(
          //   map((response: [{ userId: number, fields: IFormField[], id: number }]) => {
          //     return UserActions.getFormsSuccess({forms: response})
          //   }),
          //   catchError((error: HttpErrorResponse) => {
          //     return of(UserActions.getFormsFailure({error: error.statusText}))
          //   })
          // )
        })
      ),
    {dispatch: false}
  );


}
