import {useReducer} from "react";
import {todoReducer} from "./todoReducer.js";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Learn React',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Learn .Net',
        done: false
    }
]

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1> TodoApp 10, <small>Pending: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center"> item 1</span>
                            <button className="btn btn-danger">
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add todo</h4>
                    <hr/>
                    <form>
                        <input
                            type="text"
                            placeholder="todo description"
                            className="form-control"
                        />
                        <button
                            className="btn btn-outline-primary mt-1"
                            type='submit'
                        >
                            Add todo
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

