import { db } from '../firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

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
      console.log(doc);
    } catch (e) {
      Swal.fire('error', e.code, 'error');
    }
  };
};
