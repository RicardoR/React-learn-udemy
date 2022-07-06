import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

// Interact with auth store

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      storeTokenInLocalStorage(data.token);
      dispatchLogin(data);
    } catch (error) {
      dispatch(onLogout('Wrong credentials'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password,
      });
      storeTokenInLocalStorage(data.token);
      dispatchLogin(data);
    } catch (error) {
      const err = error.data?.msg ?? 'Error';
      dispatch(onLogout(err));

      console.log(error);
      console.log(error.response.data);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return dispatch(onLogout());
    }

    try {
      const { data } = await calendarApi.get('/auth/renew');
      storeTokenInLocalStorage(data.token);
      dispatchLogin(data);
    } catch (error) {
      startLogout();
    }
  };

  const storeTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('token-init-date', new Date().getTime());
  };

  const dispatchLogin = (data) => {
    dispatch(onLogin({ name: data.name, uid: data.uid }));
  };

  return {
    // Props
    status,
    user,
    errorMessage,
    // Methods
    startLogin,
    startRegister,
    startLogout,
    checkAuthToken,
  };
};
