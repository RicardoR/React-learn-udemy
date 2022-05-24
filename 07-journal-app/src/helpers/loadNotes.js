import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase/firebase-config';

const journalPath = 'journal/notes';

export const loadNotes = async (uid) => {
  const dataRef = await getDocs(collection(db, `${uid}/${journalPath}`));
  const notes = [];

  dataRef.forEach((data) => {
    notes.push({
      id: data.id,
      ...data.data(),
    });
  });

  return notes;
};
