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
    case actionTypes.NOTES_UPDATED:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.note.id ? action.payload.note : note
        ),
      };
    case actionTypes.NOTES_DELETED:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};
