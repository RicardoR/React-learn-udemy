import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Navbar Ut', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Ricardo',
    },
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test('should display with default values', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Ricardo');
  });

  test('should call logout, navigate and dispatch with args', () => {
    wrapper.find('button').simulate('click');
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
