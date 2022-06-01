import { authReducer } from '../../reducers/authReducer';
import { actionTypes } from '../../types/actionTypes';

const initialState = {
  uid: '123',
  displayName: 'John Doe',
};

describe('authReducer Ut', () => {
  test('should return the initial state by default', () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should return the uid user and user name when login', () => {
    const action = {
      type: actionTypes.LOGIN,
      payload: initialState,
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
      uid: '123',
      name: 'John Doe',
    });
  });
  test('should logout the user', () => {
    const action = { type: actionTypes.LOGOUT };
    const state = authReducer(initialState, action);
    expect(state).toEqual({});
  });
});
