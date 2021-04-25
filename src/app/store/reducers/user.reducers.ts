// import { Action, createReducer, on } from '@ngrx/store';
// import * as UserActions from '../actions/user.actions';
// import { UserModel } from '../../models/user.model';
// import { UserState, initialState } from '../states/user.state';

// // export const intialState = initializeState();
// // export const featureKey = 'userDetail';

// export const reducer = createReducer(
//   initialState,
//   on(UserActions.loadUser, state => ({
//     ...state,
//     isLoading: true,
//     error: null
//   })),
//   on(UserActions.addUserDetails, (state, { data }) => {
//     return  {
//       ...state,
//       data,
//       isLoading: true,
//       error: null
//     };
//   }),
//   on(UserActions.addUserDetailsSuccess, (state, { data }) => {
//     return {
//     ...state,
//     data,
//     isLoading: false,
//     error: null
//     };
//   }),
//   on(UserActions.addUserDetailsError, (state, { error } ) => ({
//     ...state, 
//     isLoading: false, 
//     errorMessage: error
//   }))
// )

// export function userReducer(state: UserState | undefined, action: Action) { 
//     return reducer(state, action);
// }


import { UserModel } from '../../models/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { addUserDetails, addUserDetailsSuccess, addUserDetailsError } from '../actions/user.actions';

export interface UserState extends EntityState<UserModel> {
  userDetailLoaded: boolean;
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState = adapter.getInitialState({
  userDetailLoaded: false
});

export const userReducer = createReducer(
  initialState,
  on(addUserDetailsSuccess, (state, action) => {
    return adapter.upsertOne(action.data, state);
  }),

  on(addUserDetails, (state, action) => {
    return adapter.addOne(action.data, state);    
  }),

  on(addUserDetailsError, (state) => {
    return adapter.removeAll(state);    
  }),

);

export const { selectAll } = adapter.getSelectors();