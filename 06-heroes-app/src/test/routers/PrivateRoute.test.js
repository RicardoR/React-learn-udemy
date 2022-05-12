import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../components/routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>El login</span>,
}));

describe('PrivateRoute', () => {
  Storage.prototype.setItem = jest.fn();

  test('should display the component when logged', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'John Doe',
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Hello Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Hello Private Component');
    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
  });

  test('should navigate to login when no logged', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Hello Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text().trim()).toBe('El login');
  });
});
