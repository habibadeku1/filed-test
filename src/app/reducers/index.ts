import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {userReducer} from '../reducers/user.reducers';
import { UserState } from '../states/user.state';


export interface AppState {
  user: UserState
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};

export const selectUser = (state: AppState) => state.user.userData;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

