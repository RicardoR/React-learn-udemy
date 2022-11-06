import {addTodoAction, deleteTodoAction, todoReducer, toggleTodoAction} from "../../src/08-useReducer/todoReducer";

describe('todoReducer UT', () => {
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('should return the initial state by default', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState)
    });

    test('should add todo ', () => {
        const action = {
            type: addTodoAction,
            payload: {
                id: 2,
                description: 'New Todo',
                done: false
            }
        };
        const expectedState = [initialState[0], action.payload];
        const newState = todoReducer(initialState, action)
        expect(newState).toEqual(expectedState);
    });

    test('should delete a todo', () => {
        const action = {
            type: deleteTodoAction,
            payload: initialState[0]
        }
        const newState = todoReducer(initialState, action)
        expect(newState).toEqual([]);
    });

    test('should toggle a todo', () => {
        const action = {
            type: toggleTodoAction,
            payload: initialState[0]
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(initialState, action);
        expect(newState2[0].done).toBe(false);
    });
});
