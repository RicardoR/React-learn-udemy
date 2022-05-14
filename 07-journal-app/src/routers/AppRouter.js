import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
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
