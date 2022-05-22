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

export const startLoading = () => {
  return {
    type: actionTypes.UI_START_LOADING,
  };
};

export const finishLoading = () => {
  return {
    type: actionTypes.UI_FINISH_LOADING,
  };
};
