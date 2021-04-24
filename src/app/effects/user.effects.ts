import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';


@Injectable()
export class UserEffects {

  constructor(private action$: Actions, private userService: UserService, private router: Router) {}

  addUserDetails$ = createEffect((): Observable<any> =>
    this.action$.pipe(
      ofType(UserActions.addUserDetails),
      mergeMap((action) =>      
        this.userService.addUserDetails(action.data)
          .pipe(
            map((response) => {
              let returnAction;
              if (response.body.status != 'success') {
                this.snackBarService.showBar(
                  'error',
                  'FAILURE',
                  'User details entry failed!'
                );
                this.router.navigate(['']);
                returnAction = UserActions.addUserDetailsError({ error: 'There was an error adding the user details' });
              } else if (response.body.status === 'success') {
                this.snackBarService.showBar(
                  'success',
                  'SUCCESSFUL',
                  'User details entry successful!'
                );
                this.router.navigate(['']);
                returnAction = UserActions.addUserDetailsSuccess({ data: action.data });
              }
              return returnAction;
            }),
            catchError((error) => {
              return of(UserActions.addUserDetailsError({ error }));
            })
          )
      )
    )
  );

}

