import {render, screen} from "@testing-library/react";
import {GifGridItem} from "../../src/components";

describe('GifGridItem UT', () => {

    test('should do match with snapshot', () => {
        const {container} = render(<GifGridItem url='image-url' title='title-image'/>);
        expect(container).toMatchSnapshot();
   });

    test('should display the image with url and alt', () => {
        render(<GifGridItem url='image-url' title='title-image'/>);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe('http://localhost/image-url');
        expect(alt).toBe('title-image');

        // expect(screen.getByRole('img').alt).toBe('title-image');
    });

    test('should display the component title', () => {
        render(<GifGridItem url='image-url' title='title-image'/>);
        expect(screen.getByText('title-image')).toBeTruthy();
    });
});
