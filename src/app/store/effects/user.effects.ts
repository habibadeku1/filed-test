import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { AppService } from '../../app.service';
import { UserModel } from '../../models/user.model';
import { UserDetailService } from '../../user-detail/user-detail.service';


@Injectable()
export class UserEffects {

  constructor(private action$: Actions, private userService: UserDetailService, private router: Router, private appService: AppService) {}

  addUserDetails$ = createEffect(
    (): Observable<any> =>
    this.action$.pipe(
      ofType(UserActions.addUserDetails),
      mergeMap((action) =>      
        this.userService.addUserDetails(action.data)
          .pipe(
            map((response) => {
              let returnAction;
              if (response.body.status != 'success') {
                this.appService.showSnack(
                  'FAILURE: User details entry failed!',
                  'close',
                  'error',
                );
                returnAction = UserActions.addUserDetailsError({ error: 'There was an error adding the user details' });
              } else if (response.body.status === 'success') {
                this.appService.showSnack(
                  'SUCCESSFUL: User details entry successful!',
                  'close',
                  'success',
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
