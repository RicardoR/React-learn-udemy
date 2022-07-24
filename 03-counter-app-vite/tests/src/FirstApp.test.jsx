import {FirstApp} from "../../src/FirstApp";
import {render} from "@testing-library/react";

describe('FirstApp UT', () => {
    test('should do match with snapshot', () => {
        const developer = {
            name: 'Ricardo',
            surname: 'Rodríguez',
            age: 41
        };
        const {container} = render(<FirstApp {...developer} />);
        expect(container).toMatchSnapshot();
    });

    test('should display the name in h1 tag', async () => {
        const developer = {
            name: 'Ricardo',
            surname: 'Rodríguez',
            age: 41
        };
        const {container, getByText} = await render(<FirstApp {...developer} />);
        expect(getByText('Name: Ricardo', { exact: false })).toBeTruthy();
        const h1Element = container.querySelector('h1');
        expect(h1Element.innerHTML).toContain('Name: Ricardo');
    });
});
