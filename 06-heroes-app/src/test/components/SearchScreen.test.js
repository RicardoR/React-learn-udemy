import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HeroCard } from '../../components/hero/HeroCard';
import { SearchScreen } from '../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('SearchScreen UT', () => {
  test('should display with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe');
  });

  test('should display Batman and input with the query string', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper.find(HeroCard)).toHaveLength(1);
  });

  test('should display a message when search does not found any result', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=no-hero']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe('no-hero');
    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      'No hay resultados para: no-hero'
    );
  });

  test('should call navigate to the new url', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'searchText', value: 'batman' } });

    wrapper.find('form').prop('onSubmit')({ preventDefault: () => {} });
    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
