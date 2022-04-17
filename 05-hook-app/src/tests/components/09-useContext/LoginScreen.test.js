import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('LoginScreen UT', () => {
  const user = {
    name: 'Jane Doe',
    email: 'jan@mail.com',
  };
  const setUser = jest.fn();

  // mount allow us to render the childs components
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display user name', () => {
    expect(wrapper.find('h1').text()).toBe('LoginScreen');
    expect(wrapper.find('pre').text()).toBe(JSON.stringify(user, null, 3));
  });

  test('should handle login when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'John Doe',
    });
  });
});
