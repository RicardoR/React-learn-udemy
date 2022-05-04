import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HeroCard } from '../../components/hero/HeroCard';
import { SearchScreen } from '../../components/search/SearchScreen';

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
});
