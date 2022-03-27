import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleComplete, handleRemove }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p
        onClick={() => handleComplete(todo.id)}
        className={`cursor-pointer mb-0 
                  ${todo.done ? 'complete' : ''} `}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        onClick={() => handleRemove(todo.id)}
        className="btn btn-outline-danger"
      >
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
