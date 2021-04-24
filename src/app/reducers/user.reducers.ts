import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { UserModel } from '../models/user.model';
import { UserState, initialState } from '../states/user.state';

// export const intialState = initializeState();

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUser, (state: UserState) => ({
    ...state,
    isLoading: true,
    error: state.error
  })),
  on(UserActions.loadUserSuccess, (state, { data }) => {
    return  {
      ...state,
      data,
      isLoading: false,
      error: null
    };
  }),
  on(UserActions.addUserDetailsSuccess, (state: UserState, { data }) => ({
    ...state,
    data,
    isLoading: false,
    error: null
  })),
  on(UserActions.addUserDetailsError, (state: UserState) => {
    return state.error;
  })
)

export function userReducer(state: UserState | undefined, action: Action) {
    return reducer(state, action);
}