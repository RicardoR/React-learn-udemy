import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from '../../actions/ui';
import { actionTypes } from '../../types/actionTypes';

describe('ui UT', () => {
  test('all actions should work', () => {
    const action = setError('error');
    expect(action).toEqual({
      type: actionTypes.UI_SET_ERROR,
      payload: 'error',
    });

    const actionRemoveError = removeError();
    expect(actionRemoveError).toEqual({
      type: actionTypes.UI_REMOVE_ERROR,
    });

    const actionStartLoading = startLoading();
    expect(actionStartLoading).toEqual({
      type: actionTypes.UI_START_LOADING,
    });

    const actionFinishLoading = finishLoading();
    expect(actionFinishLoading).toEqual({
      type: actionTypes.UI_FINISH_LOADING,
    });
  });
});
