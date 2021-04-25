import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const loadUser = createAction(
  '[User] Load User'
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ data: UserModel }>()
);

export const addUserDetails = createAction(
  '[User] Add User Details',
  props<{ data: UserModel }>()
);

export const addUserDetailsSuccess = createAction(
  '[User] - Add User Details Success',
  props<{ data: UserModel }>()
);

export const addUserDetailsError = createAction(
  '[User] Add User Details Error',
  props<{ error: string }>()
);

export const refreshUser = createAction(
  '[User] Refresh'
);





