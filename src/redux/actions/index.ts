export const UPDATE_USER_DATA = 'UPDATE_USER_DATA ';

export const updateUserData = (email : string) => ({
  type: UPDATE_USER_DATA,
  payload: {
    email,
  },
});
