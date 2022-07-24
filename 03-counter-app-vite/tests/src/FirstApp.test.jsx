import {FirstApp} from "../../src/FirstApp";
import {render} from "@testing-library/react";

describe('FirstApp UT', () => {
    const developer = {
        name: 'Ricardo',
        surname: 'Rodríguez',
        age: 41
    };
    const {container} = render(<FirstApp {...developer} />);

    test('should do match with snapshot', () => {
        expect(container).toMatchSnapshot();
    });

    test('should display the name in h1 tag',  async () => {
        const {container, getByText, getByTestId} = await render(<FirstApp {...developer} />);

        expect(getByText(`Name: ${developer.name}`)).toBeTruthy();
        const h1Element = container.querySelector('h1');
        expect(h1Element.innerHTML).toContain( `Name: ${developer.name}`);
        expect(getByTestId('test-title').innerHTML).toContain(`Name: ${developer.name}`);
    });

    test('should set the surname', async () => {
        const {getAllByText} = await render(<FirstApp {...developer} />);
        expect(getAllByText(`Surname: ${developer.surname}`).length).toBe(1);
    });
});
