import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { actionTypes } from '../types/actionTypes';
import { googleAuthProvider } from '../firebase/firebase-config';
import { removeError, setError } from './ui';

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(removeError());
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => dispatch(setError(e.message)));
  };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => dispatch(setError(e.message)));
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
