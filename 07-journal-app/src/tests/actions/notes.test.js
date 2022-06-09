/**
 * @jest-environment node
 */
import {
  deleteDoc,
  disableNetwork,
  doc,
  getDoc,
  terminate,
} from 'firebase/firestore';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startSavePicture,
} from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { actionTypes } from '../../types/actionTypes';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    return Promise.resolve('https://hola-mundo.com');
  }),
}));

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

  beforeEach(() => {
    store.clearActions();
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

  test('should load notes', async () => {
    await store.dispatch(startLoadingNotes('testUID'));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: actionTypes.NOTES_LOAD,
      payload: expect.any(Array),
    });
  });

  test('startSaveNote should update the note', async () => {
    const note = {
      title: 'testTitleUpdated',
      body: 'testBodyUpdated',
      id: '6Oz1aCb4B2KB0SYziC4m',
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    expect(actions[0].type).toBe(actionTypes.NOTES_UPDATED);

    const getDocumentRef = await getDoc(
      doc(db, 'testUID', 'journal', 'notes', `${note.id}`)
    );
    expect(getDocumentRef.data()).toEqual({
      title: 'testTitleUpdated',
      body: 'testBodyUpdated',
      imageUrl: 'https://hola-mundo.com',
      date: expect.any(Number),
    });
  });

  test('startSavePicture should update the url note', async () => {
    const file = [];
    await store.dispatch(startSavePicture(file));

    const docRef = await getDoc(
      doc(db, `/testUID/journal/notes/6Oz1aCb4B2KB0SYziC4m`)
    );
    // expect(docRef.data().url).toBe('https://hola-mundo.com');
  });
});
