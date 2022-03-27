import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  REMOVE_TODO,
} from './useReducerConstants';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';

const descriptionField = 'description';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const TodoApp = () => {
  // el dispatch es el que se usa para enviar acciones al reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, resetInput] = useForm({
    [descriptionField]: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || description.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: ADD_TODO,
      payload: newTodo,
    };

    dispatch(action);
    resetInput();
  };

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
          <h4>Agregar Todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name={descriptionField}
                value={description}
                placeholder="Descripción"
                className="form-control"
                autoComplete="off"
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button type="onSubmit" className="btn btn-outline-secondary">
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
