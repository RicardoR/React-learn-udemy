import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('TodoList Ut', () => {
  const handleRemove = jest.fn();
  const handleComplete = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleRemove={handleRemove}
      handleComplete={handleComplete}
    />
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain 2 TodoListItem', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
  });

  test('each todoListItem should have the correct props', () => {
    const todoListItems = wrapper.find('TodoListItem');
    todoListItems.forEach((todoListItem, i) => {
      expect(todoListItem.prop('todo')).toBe(demoTodos[i]);
      expect(todoListItem.prop('index')).toBe(i);
      expect(todoListItem.prop('handleRemove')).toBe(handleRemove);
      expect(todoListItem.prop('handleComplete')).toBe(handleComplete);
    });
  });
});
