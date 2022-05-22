import { getAuth, signInWithPopup } from 'firebase/auth';

import { types } from '../types/types';
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
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};
