import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-example/MultipleCustomHooks";
import {useCounter, useFetch} from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHooks UT', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        increment: mockIncrement,
        counter: 0
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should display the component by default', () => {

        useFetch.mockReturnValue({
            data: null,
            hasError: null,
            isLoading: true
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('breaking bad Quotes'));
        expect(nextButton.disabled).toBe(true);
    });

    test('should display a Quote', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Ricardo',
                quote: 'Hola que ases'
            }],
            hasError: false,
            isLoading: false
        });
        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(screen.getByText('Ricardo'));
        expect(screen.getByText('Hola que ases'));
        expect(nextButton.disabled).toBe(false);
    });

    test('should call to increment function', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Ricardo',
                quote: 'Hola que ases'
            }],
            hasError: false,
            isLoading: false
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled()

    });
});


