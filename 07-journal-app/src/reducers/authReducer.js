import { actionTypes } from '../types/actionTypes';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};
