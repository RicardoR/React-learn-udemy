import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  REMOVE_TODO,
} from './useReducerConstants';

export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_TODO_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
    default:
      return state;
  }
};
