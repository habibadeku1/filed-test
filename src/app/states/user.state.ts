import {UserModel} from '../models/user.model';

export interface UserState {
  user: UserModel | null;
}

export const initialUserState: UserModel = new UserModel();

export interface UserState {
  isLoading?: boolean;
  error?: any;
  userData?: UserModel;
}

export const initialState: UserState = {
  isLoading: false,
  error: null,
  user: initialUserState
};


