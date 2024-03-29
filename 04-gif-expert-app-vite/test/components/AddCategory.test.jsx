import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components";

describe('AddCategory UT', () => {
    test('should match with snapshot', () => {
        const {container} = render(<AddCategory onNewCategory={ () => {} }/>);
        expect(container).toMatchSnapshot();
    });

    test('should manage the input text value', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target : { value: 'bleach' } });
        expect(input.value).toBe('bleach');
    });

    test('should call onNewCategory when input contains value', () => {
        const inputValue = 'Dragon Ball';
        const onNewCategoryFn = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryFn}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target : { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategoryFn).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory when input contains and empty value', () => {
        const onNewCategoryFn = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryFn}/>);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategoryFn).not.toHaveBeenCalled();
    });
});
