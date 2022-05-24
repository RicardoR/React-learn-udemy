import { actionTypes } from '../types/actionTypes';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTES_ACTIVE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case actionTypes.NOTES_LOAD:
      return {
        ...state,
        notes: [...action.payload],
      };
    default:
      return state;
  }
};
