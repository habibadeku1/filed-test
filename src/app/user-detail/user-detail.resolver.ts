import { isUserLoaded } from '../store/selectors/user.selector';
import { loadUser, addUserDetailsSuccess } from '../store/actions/user.actions';
import { AppState } from './../store/reducers/index';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class UserDetailResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(isUserLoaded),
        tap((userLoaded) => {
          console.log('check user loaded ', userLoaded);
        }),
        filter(userLoaded => userLoaded),
        first()
    );
  }
}