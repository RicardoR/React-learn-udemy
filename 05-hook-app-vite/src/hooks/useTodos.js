import {useEffect, useReducer, useState} from 'react';
import {addTodoAction, deleteTodoAction, todoReducer, toggleTodoAction} from "../08-useReducer/todoReducer";

const LOCALSTORAGE_TODOS_KEY = 'todos';
const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_TODOS_KEY)) ?? [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const [pendingTodosCount, setPendingTodosCount] = useState(0);
    const [todosCount, setTodosCount] = useState(0);

    useEffect(() => {
        const todosToStore = JSON.stringify(todos);
        localStorage.setItem(LOCALSTORAGE_TODOS_KEY, todosToStore);
        const pending = todos.filter(todo => todo.done === false)?.length;
        setPendingTodosCount(pending);
        setTodosCount(todos.length);
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: addTodoAction,
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: deleteTodoAction,
            payload: todo
        };
        dispatch(action);
    }

    const handleToggleTodo = (todo) => {
        const action = {
            type: toggleTodoAction,
            payload: todo
        };
        dispatch(action);
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
};

