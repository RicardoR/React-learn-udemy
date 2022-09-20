import {render, screen, fireEvent} from "@testing-library/react";
import {AddCategory} from "../../src/components";

describe('AddCategory UT', () => {
    test('should match with snapshot', () => {
        const {container} = render(<AddCategory onNewCategory={ () => {} }/>);
        expect(container).toMatchSnapshot();
    });

    test('should manage the input text value', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target : {value: 'bleach' } });
        expect(input.value).toBe('bleach');
    });
});
