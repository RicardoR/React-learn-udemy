import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../components/routers/AppRouter';

describe('AppRouter UT', () => {
  const contextValue = {
    user: {
      logged: false,
    },
  };

  test('when no auth should display login screen', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('LoginScreen')).toHaveLength(1);
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });
});
