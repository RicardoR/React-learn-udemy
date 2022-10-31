export const addTodoAction = '[TODO] add todo';

export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case addTodoAction:
            return [...initialState, action.payload]
        default:
            return initialState;
    }
}
