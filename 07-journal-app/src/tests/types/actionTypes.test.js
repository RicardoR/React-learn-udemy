import { actionTypes } from '../../types/actionTypes';

const expectedTypes = {
  LOGIN: '[Auth] Login',
  LOGOUT: '[Auth] Logout',

  UI_SET_ERROR: '[UI] Set Error',
  UI_REMOVE_ERROR: '[UI] Remove Error',

  UI_START_LOADING: '[UI] Start Loading',
  UI_FINISH_LOADING: '[UI] Finish Loading',

  NOTES_ADD_NEW: '[Notes] Add New',
  NOTES_ACTIVE: '[Notes] Set Active note',
  NOTES_LOAD: '[Notes] Load notes',
  NOTES_UPDATED: '[Notes] Update note',
  NOTES_FILE_URL: '[Notes] Updated image url',
  NOTES_DELETED: '[Notes] Deleted note',
  NOTES_LOGOUT_CLEANING: '[Notes] Logout cleaning',
};

describe('actionTypes', () => {
  test('should export an expected object', () => {
    expect(actionTypes).toEqual(expectedTypes);
  });
});
