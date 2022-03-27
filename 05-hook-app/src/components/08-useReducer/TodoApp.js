import React, {useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

export const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState);
    console.log(todos);

    return (
      <div>
        <h1>TodoApp ({todos.length}) </h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <ol className="list-group list-group-flush">
              {todos.map((todo, i) => (
                <li key={todo.id} className="list-group-item">
                  <p className="cursor-pointer">
                    {i + 1}. {todo.desc}
                    <button className="btn btn-outline-danger btn-sm ml-1">
                      <i className="fa fa-trash"></i>
                    </button>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />
            <form>
              <div className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Descripción"
                  className="form-control"
                  autoComplete="off"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary">
                    <i class="fa-solid fa-circle-plus"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
