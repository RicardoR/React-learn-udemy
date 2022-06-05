import { deleteDoc, disableNetwork, doc, terminate } from 'firebase/firestore';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { actionTypes } from '../../types/actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockNote = {
  id: 'testID',
  title: 'testTitle',
  body: 'testBody',
  imageUrl: 'testImageUrl',
  date: 'testDate',
};

const mockNote2 = {
  id: 'testID2',
  title: 'testTitle2',
  body: 'testBody2',
  imageUrl: 'testImageUrl2',
  date: 'testDate2',
};

const store = mockStore({
  auth: {
    uid: 'testUID',
  },
  notes: {
    activeNote: mockNote,
    notes: [mockNote, mockNote2],
  },
});
describe('notes actions UT', () => {
  afterAll(() => {
    disableNetwork(db);
    terminate(db);
  });

  test('should create a new note', async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: actionTypes.NOTES_ACTIVE,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        imageUrl: '',
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: actionTypes.NOTES_LOAD,
      payload: expect.any(Array),
    });

    const noteCreatedId = actions[0].payload.id;
    const noteRef = doc(db, `testUID/journal/notes/${noteCreatedId}`);

    await deleteDoc(noteRef);
  });
});
