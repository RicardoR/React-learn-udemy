import { types } from '../types/types';

export const login = (uid, displayName) => {
  return {
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};
