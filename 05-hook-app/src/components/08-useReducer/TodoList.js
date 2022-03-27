import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleRemove, handleComplete }) => {
  return (
    <ol className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          index={i}
          key={todo.id}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
        />
      ))}
    </ol>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ),
  handleRemove: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};
