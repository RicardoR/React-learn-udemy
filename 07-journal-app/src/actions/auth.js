import { getAuth, signInWithPopup } from 'firebase/auth';

import { actionTypes } from '../types/actionTypes';
import { googleAuthProvider } from '../firebase/firebase-config';

export const initLogin = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'pedro'));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};
