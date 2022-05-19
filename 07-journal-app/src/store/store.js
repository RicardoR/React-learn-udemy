import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const reducer = combineReducers({
  auth: authReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export const store = configureStore({
  reducer,
  undefined,
  middlewareEnhancer,
});
