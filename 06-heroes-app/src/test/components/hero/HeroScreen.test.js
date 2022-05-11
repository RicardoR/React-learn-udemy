import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroScreen } from '../../../components/hero/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('HeroScreen Ut', () => {
  test('should not render an hero screen without an hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HeroScreen)).toHaveLength(0);
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });

  test('should render the hero screen when param exists and hero has found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-thor']}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HeroScreen)).toHaveLength(1);
    expect(wrapper.find('h3').text().trim()).toBe('Thor');
  });

  test('should return to back screen', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-thor']}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('should display no hero page when hero does not exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/no-existe']}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find(HeroScreen)).toHaveLength(0);
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });
});
