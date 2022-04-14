import React from 'react';
import { shallow } from 'enzyme';
import { RealExample } from '../../../components/04-useRef/RealExample';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

describe('RealExample UT', () => {
  const wrapper = shallow(<RealExample />);

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MultipleCustomHooks).exists()).toBe(false);
  });

  test('should display the <MultipleCustomHooks /> component', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find(MultipleCustomHooks).exists()).toBe(true);
  });
});
