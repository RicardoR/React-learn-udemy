import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  REMOVE_TODO,
} from './useReducerConstants';
import { TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const TodoApp = () => {
  // el dispatch es el que se usa para enviar acciones al reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleRemove = (id) => {
    const action = {
      type: REMOVE_TODO,
      payload: id,
    };

    dispatch(action);
  };

  const handleComplete = (id) => {
    const action = {
      type: CHANGE_TODO_STATUS,
      payload: id,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: ADD_TODO,
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleRemove={handleRemove}
            handleComplete={handleComplete}
          />
        </div>
        <div className="col-5">
          <TodoAddForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
