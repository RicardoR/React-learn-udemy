import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../components/AddCategory';


describe('<AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should display', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change the input', () => { 
        const input = wrapper.find('input');
        const value = 'New Category';

        input.simulate('change', { target: { value } });
    });

    test('should not post the info on submith', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should post the info on submith', () => {
        const category = 'Avengers';
        wrapper.find('input').simulate('change', { target: { value: category } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
     });
});
