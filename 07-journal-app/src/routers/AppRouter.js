import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [loginChecking, setLoginChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setLoginChecking(false);
    });
  }, [dispatch, setLoginChecking, setIsLoggedIn]);

  if (loginChecking) {
    return <h1>Un segundo por favor...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth">
            <AuthRouter />
          </Route>
          <Route path="/" exact>
            <JournalScreen />
          </Route>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
