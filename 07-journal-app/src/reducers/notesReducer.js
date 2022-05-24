/* 
{
    notes: [],
    active?:  {
        id: '',
        title: '',
        body: '',
        imageUrl: '',
        date: '',
    }
 }
 */

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
    default:
      return state;
  }
};
