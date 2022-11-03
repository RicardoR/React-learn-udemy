import {act, renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/";

describe('test in useCounter', () => {
    test('should return the default values', () => {
        const {result} = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('should increment the counter', () => {
        const {result} = renderHook(() => useCounter());
        const {increment} = result.current;

        expect(result.current.counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));

        act(() => {
            increment(2);
        });
        expect(result.current.counter).toBe(12);

        act(increment);
        expect(result.current.counter).toBe(13);

    });

    test('should decrement the counter', () => {
        const {result} = renderHook(() => useCounter());
        const {decrement} = result.current;

        expect(result.current.counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function))

        act(() => {
            decrement(2);
        });
        expect(result.current.counter).toBe(8);

        act(decrement);
        expect(result.current.counter).toBe(7);

    });

    test('should reset the counter', () => {
        const {result} = renderHook(() => useCounter());
        const {reset, increment} = result.current;

        expect(result.current.counter).toBe(10);
        expect(reset).toEqual(expect.any(Function));

        act(() => {
            increment(3);
        });
        expect(result.current.counter).toBe(13);
        act(reset);
        expect(result.current.counter).toBe(10);
    });
});
