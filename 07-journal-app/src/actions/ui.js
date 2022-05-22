import { actionTypes } from '../types/actionTypes';

export const setError = (message) => {
  return {
    type: actionTypes.UI_SET_ERROR,
    payload: message,
  };
};

export const removeError = () => {
  return {
    type: actionTypes.UI_REMOVE_ERROR,
  };
};
