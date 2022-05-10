import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('LoginScreen UT', () => {
  const contextValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/marvel" element={<div>Marvel</div>} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should render LoginScreen', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call login and navigate', () => {
    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Ricardo',
      },
    });

    expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true });

    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  });
});
