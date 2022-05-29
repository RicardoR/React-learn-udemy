import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import Swal from 'sweetalert2';

import { actionTypes } from '../types/actionTypes';
import { googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, setError, startLoading } from './ui';
import { cleanNotes } from './notes';

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    dispatch(startLoading());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch((e) => Swal.fire('Error', e.message, 'error'))
      .finally(() => dispatch(finishLoading()));
  };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    dispatch(startLoading());

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => dispatch(setError(e.message)))
      .finally(() => dispatch(finishLoading()));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading());

    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)))
      .catch((e) => dispatch(setError(e.message)))
      .finally(() => dispatch(finishLoading()));
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

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await auth.signOut();
    dispatch(logout());
    dispatch(cleanNotes());
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
