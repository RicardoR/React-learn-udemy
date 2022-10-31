const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }


    return state;
}

let todos = todoReducer(initialState);

const newTodo = {
    id: 2,
    todo: 'Comprar vino',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(initialState, addTodoAction);

console.log({state: todos});
