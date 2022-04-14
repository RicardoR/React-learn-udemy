import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// esto dice que si se usa el fichero que contiene el useFetch usa el mock
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('MultipleCustomHooks test', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: jest.fn(),
    });
  });

  test('should render correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display the info', () => {
    useFetch.mockReturnValue({
      data: [
        {
          id: '123',
          author: 'Javier',
          quote: 'Hola',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-2').text().trim()).toBe('Hola');
    expect(wrapper.find('footer').text().trim()).toBe('Javier');
    expect(wrapper).toMatchSnapshot();
  });
});
