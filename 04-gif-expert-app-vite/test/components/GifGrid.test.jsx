import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid UT', () => {
    const category = 'One Punch';

    test('should display the loading if category is not sent', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should display items when images are loaded', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'SAitama',
                url: 'an urls'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'an urls'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
