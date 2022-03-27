import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  REMOVE_TODO,
} from './useReducerConstants';
import { useForm } from '../../hooks/useForm';

const descriptionField = 'description';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const TodoApp = () => {
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

    // Esto actualiza el reducer y la app
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
          <ol className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <p
                  onClick={() => handleComplete(todo.id)}
                  className={`cursor-pointer mb-0 
                  ${todo.done ? 'complete' : ''} `}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="btn btn-outline-danger"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ol>
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
