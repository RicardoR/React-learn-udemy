import { db } from '../firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { actionTypes } from '../types/actionTypes';
import { loadNotes } from '../helpers/loadNotes';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      imageUrl: '',
      date: new Date().getTime(),
    };

    try {
      const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
      dispatch(activeNote(doc.id, newNote));
    } catch (e) {
      Swal.fire('error', e.code, 'error');
    }
  };
};

export const activeNote = (id, note) => {
  return {
    type: actionTypes.NOTES_ACTIVE,
    payload: {
      id,
      ...note,
    },
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: actionTypes.NOTES_LOAD,
    payload: notes,
  };
};
