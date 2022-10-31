import {useForm} from "../hooks";

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const createNewTodo = (event) => {
        event.preventDefault();
        if (!description?.trim().length) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form>
            <input
                type="text"
                placeholder="todo description"
                className="form-control"
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button
                onClick={createNewTodo}
                className="btn btn-outline-primary mt-1"
                type='submit'
            >
                Add todo
            </button>
        </form>
    );
};

