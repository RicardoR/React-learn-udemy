export const TodoItem = ({todo = {}, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                role='button'
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(todo)}
                aria-label='span'
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo)}>
                Delete
            </button>
        </li>
    );
};

