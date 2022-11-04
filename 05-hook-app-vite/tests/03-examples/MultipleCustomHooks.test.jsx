import {render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-example/MultipleCustomHooks";

describe('MultipleCustomHooks UT', () => {
    test('should display the component by default', () => {
        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('breaking bad Quotes'));
        expect(nextButton.disabled).toBe(true);
    });
});
