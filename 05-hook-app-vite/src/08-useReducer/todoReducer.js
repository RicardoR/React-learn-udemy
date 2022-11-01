export const addTodoAction = '[TODO] add todo';
export const deleteTodoAction = '[TODO] delete todo';

export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case addTodoAction:
            return [...initialState, action.payload];
        case deleteTodoAction:
            return initialState.filter(todo => todo.id !== action.payload.id);
        default:
            return initialState;
    }
}
