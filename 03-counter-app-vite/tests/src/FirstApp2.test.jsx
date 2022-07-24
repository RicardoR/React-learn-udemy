import {FirstApp} from "../../src/FirstApp";
import {render, screen} from "@testing-library/react";

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
        await render(<FirstApp {...developer} />);
        expect(screen.getByText(`Name: ${developer.name}`)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(`Name: ${developer.name}`);
        expect(screen.getByTestId('test-title').innerHTML).toContain(`Name: ${developer.name}`);
    });

    test('should set the surname', async () => {
        await render(<FirstApp {...developer} />);
        expect(screen.getAllByText(`Surname: ${developer.surname}`).length).toBe(1);
    });
});
