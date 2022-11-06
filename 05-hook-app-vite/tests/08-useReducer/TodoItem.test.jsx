import {render, screen} from "@testing-library/react";
import {TodoItem} from "../../src/08-useReducer/TodoItem";

describe('TodoItem Ut', () => {

    const todo = {
        id: 1,
        description: 'Estudiar React',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should display the component', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}/>
        );
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center');
    });
});
