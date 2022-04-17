import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { BrowserRouter } from 'react-router-dom';

describe('AppRouter UT', () => {
  const wrapper = mount(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
