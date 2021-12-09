import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../../components/GifGridItem';

describe('<GifGridItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a card element', () => {
    expect(wrapper.find('.card')).toBeTruthy();
  });
});
