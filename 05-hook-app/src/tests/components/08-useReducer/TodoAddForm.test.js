import React from 'react';
import { shallow } from 'enzyme';
import { TodoAddForm } from '../../../components/08-useReducer/TodoAddForm';

describe('TodoAddForm UT', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAddForm handleAddTodo={handleAddTodo} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not call to handleAddTodo wihout values', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    const description = undefined;
    wrapper.find('input').simulate('change', {
      target: { name: 'description', value: description },
    });
    formSubmit({ preventDefault: jest.fn() });
    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  test('should call to handleTodo when there is value in form', () => {
    const preventDefault = jest.fn();
    const description = 'test';
    wrapper.find('input').simulate('change', {
      target: { name: 'description', value: description },
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault });
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: description,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
