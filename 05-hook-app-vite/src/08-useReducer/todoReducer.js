export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action not implemented')
            return initialState;
        default:
            throw new Error('Action not implemented')
            return initialState;
    }
}
