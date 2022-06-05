import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

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
  test('should create a new note', async () => {
    await store.dispatch(startNewNote());
  });
});
