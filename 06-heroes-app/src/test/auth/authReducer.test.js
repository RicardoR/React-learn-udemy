import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('AuthReducer ut', () => {
  test('should return the initial state', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('should handle login and set the user name', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'johndoe',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state.name).toBe('johndoe');
    expect(state.logged).toBe(true);
  });

  test('should remove the user name when logout', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: 'johndoe' }, action);
    expect(state.name).toBeUndefined();
    expect(state.logged).toBe(false);
  });
});
