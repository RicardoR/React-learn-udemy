import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import {
  login,
  logout,
  startLogout,
  startLoginWithEmailPassword,
} from '../../actions/auth';
import { actionTypes } from '../../types/actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

describe('auth actions UT', () => {
  beforeEach(() => {
    store.clearActions();
    store = mockStore({});
  });

  test('login and logout should create the actions', () => {
    const loginAction = login(123, 'test');
    expect(loginAction).toEqual({
      type: actionTypes.LOGIN,
      payload: {
        uid: 123,
        displayName: 'test',
      },
    });

    const logoutAction = logout();
    expect(logoutAction).toEqual({
      type: actionTypes.LOGOUT,
    });
  });

  test('should start the logout', async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: actionTypes.LOGOUT,
    });
    expect(actions[1]).toEqual({
      type: actionTypes.NOTES_LOGOUT_CLEANING,
    });
  });

  //   test('should start the login with email and pass', async () => {
  //     await store.dispatch(
  //       startLoginWithEmailPassword('email@123.com', '123456')
  //     );
  //     const actions = store.getActions();
  //     expect(actions[0]).toEqual({
  //       type: actionTypes.UI_START_LOADING,
  //     });
  //   });
});
