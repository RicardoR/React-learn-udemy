import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../../components/GifGridItem';

describe('<GifGridItem />', () => {
  let wrapper;
  const props = {
    title: 'The title',
    url: 'https://localhost/image.jpg',
  }

  beforeEach(() => {
    wrapper = shallow(<GifGridItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a card element', () => {
    expect(wrapper.find('.card')).toBeTruthy();
  });

  test('should have a title with the prop title', () => {
    expect(wrapper.find('p').text().trim()).toBe(props.title);
  });

  test('should have an image with the props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(props.url);
    expect(img.prop('alt')).toBe(props.title);
  });
});
