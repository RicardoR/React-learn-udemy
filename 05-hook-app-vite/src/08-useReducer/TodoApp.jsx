import {useEffect, useReducer} from "react";
import {addTodoAction, deleteTodoAction, todoReducer} from "./todoReducer";
import {TodoList} from "./TodoList";
import {TodoAdd} from "./TodoAdd";

const LOCALSTORAGE_TODOS_KEY = 'todos';
const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_TODOS_KEY)) ?? [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        const todosToStore = JSON.stringify(todos);
        localStorage.setItem(LOCALSTORAGE_TODOS_KEY, todosToStore);

    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: addTodoAction,
            payload: todo
        }
        dispatch(action);
    }

    const onDeleteTodo = (todo) => {
        const action = {
            type: deleteTodoAction,
            payload: todo
        };

        dispatch(action);
    }

    return (
        <>
            <h1> TodoApp 10, <small>Pending: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={onDeleteTodo}/>
                </div>
                <div className="col-5">
                    <h4>Add todo</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
};

