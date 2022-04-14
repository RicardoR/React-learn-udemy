// Act sirve para ejecutar una función en un determinado momento:
// When testing, code that causes React state updates should be wrapped into act(...):

import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('UseCounter hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should return set value', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test('should increment value', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    expect(result.current.counter).toBe(10);
    act(() => increment(5));
    expect(result.current.counter).toBe(15);
  });

  test('should increment one by default', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    expect(result.current.counter).toBe(10);
    act(() => increment());
    expect(result.current.counter).toBe(11);
  });

  test('should decremente value', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    expect(result.current.counter).toBe(10);
    act(() => decrement(5));
    expect(result.current.counter).toBe(5);
  });

  test('should decremente one by default', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    expect(result.current.counter).toBe(10);
    act(() => decrement());
    expect(result.current.counter).toBe(9);
  });

  test('should allow to reset value', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement, reset } = result.current;

    expect(result.current.counter).toBe(10);
    act(() => {
      decrement(5);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
