import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login">
        <LoginScreen />
      </Route>
      <Route path="/auth/register">
        <RegisterScreen />
      </Route>
      <Redirect to="/auth/login" />
    </Switch>
  );
};
