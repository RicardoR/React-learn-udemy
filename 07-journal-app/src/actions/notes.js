import { db } from '../firebase/firebase-config';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import { actionTypes } from '../types/actionTypes';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { notes } = getState().notes;

    const newNote = {
      title: '',
      body: '',
      imageUrl: '',
      date: new Date().getTime(),
    };

    try {
      const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
      dispatch(activeNote(doc.id, newNote));
      newNote.id = doc.id;
      dispatch(setNotes(notes.concat(newNote)));
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

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToSave = { ...note };
    delete noteToSave.id;

    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

    try {
      await updateDoc(noteRef, noteToSave);
      dispatch(updateStoredNote({ ...note }));
      Swal.fire('Saved!', 'Your note has been updated', 'success');
    } catch {
      Swal.fire('Oops!', 'Something went wrong!', 'error');
    }
  };
};

export const updateStoredNote = (note) => {
  return {
    type: actionTypes.NOTES_UPDATED,
    payload: {
      note,
    },
  };
};

export const startSavePicture = (file) => {
  return async (dispatch, getState) => {
    const { active: noteActive } = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    const noteToUpdate = { ...noteActive, imageUrl: fileUrl };
    dispatch(startSaveNote(noteToUpdate));
    dispatch(activeNote(noteToUpdate.id, noteToUpdate));
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteRef = doc(db, `${uid}/journal/notes/${id}`);

    try {
      await deleteDoc(noteRef);
      dispatch(removeNote(id));
      Swal.fire('Deleted!', 'Your note has been deleted', 'success');
    } catch {
      Swal.fire('Oops!', 'Something went wrong!', 'error');
    }
  };
};

export const removeNote = (id) => {
  return {
    type: actionTypes.NOTES_DELETED,
    payload: {
      id,
    },
  };
};

export const cleanNotes = () => {
  return {
    type: actionTypes.NOTES_LOGOUT_CLEANING,
  };
};
