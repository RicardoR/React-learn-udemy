import { types } from '../types/types';

export const initLogin = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'pedro'));
    }, 3500);
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};
