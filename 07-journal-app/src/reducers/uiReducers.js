import { actionTypes } from '../types/actionTypes';

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UI_SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };
    case actionTypes.UI_REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };

    default:
      return state;
  }
};
