import React from 'react';
import { HookApp } from '../HooksApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('<HooksApp /> UT', () => {
  test('should display Hello! in the title', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Hello!');
  });
});
