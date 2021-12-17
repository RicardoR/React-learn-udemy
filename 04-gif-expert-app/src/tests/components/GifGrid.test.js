import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Attention!! Mocking a service return data
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid />', () => {
    const category = 'Avengers'
    const gifs = [
      {
        id: 'wertret56456456',
        url: 'https://localhost/avengers.jpg',
        title: 'Avengers',
      },
    ];

    useFetchGifs.mockReturnValue({
      loading: true,
      data: gifs,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    test('should create', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a title with the category', () => {
        expect(wrapper.find('h3').text().trim()).toBe(category);
    });

    test('should display items when images are loaded', () => {
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
