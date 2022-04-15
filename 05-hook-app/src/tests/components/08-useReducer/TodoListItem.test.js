import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('TodoListItem UT', () => {
  const handleComplete = jest.fn();
  const handleRemove = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleComplete={handleComplete}
      handleRemove={handleRemove}
    />
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleComplete when clicked on todo', () => {
    wrapper.find('p').simulate('click');
    expect(handleComplete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should call handleRemove when clicked on button', () => {
    wrapper.find('button').simulate('click');
    expect(handleRemove).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should display the todo description', () => {
    expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('should contain complete class when done is true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapperComplete = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(false);
    expect(wrapperComplete.find('p').hasClass('complete')).toBe(true);
  });
});
