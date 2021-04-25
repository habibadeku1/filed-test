import { UserState } from '../reducers/user.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from '../reducers/user.reducers';

export const userFeatureSelector = createFeatureSelector<UserState>('user-detail');

export const getUserDetail = createSelector(
  userFeatureSelector,
  selectAll
);

export const isUserLoaded = createSelector(
  userFeatureSelector,
  state => state.userDetailLoaded
);