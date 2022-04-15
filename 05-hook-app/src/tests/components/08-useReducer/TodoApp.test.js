import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('TodoApp', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('should render TodoApp correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a todo', () => {
    const wrapperComplete = mount(<TodoApp />);
    act(() => {
      wrapperComplete.find('TodoAddForm').prop('handleAddTodo')(demoTodos[0]);
      wrapperComplete.find('TodoAddForm').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapperComplete.find('h1').text().trim()).toBe(
      `TodoApp (${demoTodos.length})`
    );

    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('should remove a todo', () => {
    wrapper.find('TodoAddForm').prop('handleAddTodo')(demoTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (1)`);
    wrapper.find('TodoList').prop('handleRemove')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (0)`);
  });
});
