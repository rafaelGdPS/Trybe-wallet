import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserDataType = {
  email: string,
};

export type UserDataActionType = {
  type: string,
  payload: {
    email: UserDataType
  }
};

export type Dispatch = ThunkDispatch<UserDataType, null, AnyAction>;
