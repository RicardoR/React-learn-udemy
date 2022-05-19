import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// opcion 1
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// opcion2: tabnine.com/code/javascript/functions/%40reduxjs%2Ftoolkit/configureStore
const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});
