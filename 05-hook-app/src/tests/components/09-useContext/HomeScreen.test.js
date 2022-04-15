import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('HomeScreen UT', () => {
  const user = {
    name: 'Jane Doe',
    email: 'jan@mail.com',
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display user name', () => {
    expect(wrapper.find('h1').text()).toBe('HomeScreen');
    expect(wrapper.find('pre').text()).toBe(JSON.stringify(user, null, 3));
  });
});
