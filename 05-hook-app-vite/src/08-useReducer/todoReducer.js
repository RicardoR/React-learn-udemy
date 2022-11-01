export const addTodoAction = '[TODO] add todo';
export const deleteTodoAction = '[TODO] delete todo';
export const toggleTodoAction = '[TODO] toggle todo';

export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case addTodoAction:
            return [...initialState, action.payload];
        case deleteTodoAction:
            return initialState.filter(todo => todo.id !== action.payload.id);
        case toggleTodoAction:
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.done = !todo.done;
                }
                return {...todo};
            })
        default:
            return initialState;
    }
}
