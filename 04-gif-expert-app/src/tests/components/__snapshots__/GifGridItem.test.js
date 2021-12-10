import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../../components/GifGridItem';

describe('<GifGridItem />', () => {
  let wrapper;
  const props = {
    title: 'Title',
    url: 'https://localhost/image.jpg',
  }

  beforeEach(() => {
    wrapper = shallow(<GifGridItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a card element', () => {
    expect(wrapper.find('.card')).toBeTruthy();
  });
});
