import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('<GifExpertApp />', () => {
    let wrapper = shallow(<GifExpertApp />);

    test('should display', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should display a category list', () => {
        const categories = ['Dragon Ball', 'One Piece'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
