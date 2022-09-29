import {fireEvent, render, screen} from "@testing-library/react";
import {GifExpertApp} from "../../src/GifExpertApp.jsx";

describe('GifExpertApp Ut', () => {
    test('should match with snapshot', () => {
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    });

    test('should set the category to the input', () => {
        render(<GifExpertApp/>);
        const inputValue = 'Dragon Ball';
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
    });

    test('should add the category', () => {
        const inputValue = {target: {value: 'new category'}};
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, inputValue );
        fireEvent.submit( form );

        expect( screen.findByText(inputValue.target.value) ).toBeTruthy();

    });
});
