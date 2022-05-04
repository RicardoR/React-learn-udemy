import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../components/routers/DashboardRoutes';

describe('DashboardRoutes UT', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Ricardo',
    },
  };
  test('should render correctly', () => {
    // AuthContext is a context value provider, so we need to wrap it in a DashboardRoutes
    // MemoryRouter is a component that renders a single child route and fixes the following issue:
    // useNavigate() may be used only in the context of a <Router> component.

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Ricardo');
  });
});
