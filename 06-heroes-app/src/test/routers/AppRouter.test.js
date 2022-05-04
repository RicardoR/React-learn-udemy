import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../components/routers/AppRouter';

describe('AppRouter UT', () => {
  test('when no auth should display login screen', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('LoginScreen')).toHaveLength(1);
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

  test('should display Marvel Component when user is logged', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Ricardo',
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.find('MarvelScreen').exists()).toBeTruthy();
  });
});
