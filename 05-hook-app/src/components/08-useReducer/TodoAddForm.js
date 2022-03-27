import React from 'react';
import { useForm } from '../../hooks/useForm';
import PropTypes from 'prop-types';

const descriptionField = 'description';

export const TodoAddForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, resetInput] = useForm({
    [descriptionField]: '',
  });

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
    handleAddTodo(newTodo);
    resetInput();
  };

  return (
    <>
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
    </>
  );
};

TodoAddForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};
