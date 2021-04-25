import {UserModel} from '../../models/user.model';

export interface UserState {
  user: UserModel | null;
}

export const initialUserState: UserModel = new UserModel();

export interface UserState {
  userData?: UserModel;
  isLoading?: boolean;
  error?: string;
}

export const initialState: UserState = {
  user: initialUserState,
  isLoading: false,
  error: null
};


