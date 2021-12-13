import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from '../actions/auth.actions';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../../shared/services/auth.service";
import {of} from "rxjs";
import {Router} from "@angular/router";
import {IUser} from "../../shared/models/model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class AuthEffects {
  private duration: number = 3000;

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  login$ = createEffect(() => this.actions
    .pipe(
      ofType(AuthActions.logIn),
      map(value => value.user),
      switchMap((user: IUser) => {
        return this.authService.login(user)
          .pipe(
            map(({accessToken, user}) => {
              return AuthActions.logInSuccess({accessToken, userId: user.id})
            }),
            catchError((error) => {
              return of(AuthActions.logInFailure(error));
            })
          )
      })
    )
  );

  register$ = createEffect(() => this.actions
    .pipe(
      ofType(AuthActions.register),
      switchMap(({user}) => {
        return this.authService.register(user)
          .pipe(
            map(({user}) => {
              return AuthActions.registerSuccess({email: user.email});
            }),
            catchError((error) => {
              return of(AuthActions.registerFailure(error));
            })
          )
      })
    )
  );

  loginSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.logInSuccess),
        tap(({accessToken, userId}) => {
          this.authService.setToken(accessToken);
          this.authService.setUserId(userId);
          this.router.navigate(['/forms-builder'])
        })
      ),
    {dispatch: false}
  );

  registerSuccess$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.registerSuccess),
        tap(({email}) => {
          this.router.navigate(['/login']);
          this.snackBar.open(`Now you can enter to system using your data`, null, {
            duration: this.duration,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        })
      ),
    {dispatch: false}
  );

  loginFailure$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.logInFailure),
        tap(({error}) => {
          this.snackBar.open(error, null, {
            duration: this.duration,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          })
        })
      ),
    {dispatch: false}
  )

  registerFailure$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.registerFailure),
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

  signOut$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.signOut),
        tap(() => {
          this.router.navigate(['']);
          this.authService.signOut();
        })
      ),
    {dispatch: false}
  );

  setToken$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.setToken),
        tap(({accessToken}) => {
          this.authService.setToken(accessToken);
        })
      ),
    {dispatch: false}
  );

  setUserId$ = createEffect(() => this.actions
      .pipe(
        ofType(AuthActions.setUserId),
        tap(({userId}) => {
          this.authService.setUserId(userId)
        })
      ),
    {dispatch: false}
  );
}
