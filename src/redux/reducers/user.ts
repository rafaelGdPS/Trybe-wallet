import { UserDataActionType } from '../../types';
import { UPDATE_USER_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: UserDataActionType) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        email: action.payload.email,

      };
    default:
      return state;
  }
};

export default user;
