import React, {useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

const descriptionField = 'description';

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => { 
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: e.target[descriptionField].value,
            done: false,
        };

        const action = {
          type: 'ADD_TODO',
          payload: newTodo
        };

        // Esto actualiza el reducer y la app
        dispatch(action);
    }

    const removeTodo = (id) => {
      const action = {
        type: 'REMOVE_TODO',
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
                  <p className="cursor-pointer mb-0">
                    {i + 1}. {todo.desc}
                  </p>
                  <button className="btn btn-outline-danger">
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
                  placeholder="Descripción"
                  className="form-control"
                  autoComplete="off"
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
}
