import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATUS,
} from '../../../components/08-useReducer/useReducerConstants';
import { demoTodos } from '../../fixtures/demoTodos';

describe('todoReducer UT', () => {
  test('should return the default state', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add a new todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn Vue',
      done: false,
    };

    const action = {
      type: ADD_TODO,
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('should allow to delete a todo', () => {
    const action = {
      type: REMOVE_TODO,
      payload: 2,
    };

    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos.filter((todo) => todo.id !== 2)]);
  });

  test('should allow to change todo status', () => {
    const todoId = 2;
    const action = {
      type: CHANGE_TODO_STATUS,
      payload: todoId,
    };

    const originalTodo = { ...demoTodos.find((t) => t.id === todoId) };

    const state = todoReducer(demoTodos, action);
    const todo = state.find((t) => t.id === todoId);
    expect(todo.done).not.toBe(originalTodo.done);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
