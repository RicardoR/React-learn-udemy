import {act, renderHook} from "@testing-library/react";
import {useForm} from "../../src/hooks";

describe('test in useForm', () => {
    const initialForm = {
        name: 'Ricardo',
        email: 'ricardo@email.com'
    }

    test('should return the default value', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('should change the name', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const target = {name: 'name', value: 'Julian'};
        act(() => {
            result.current.onInputChange({target});
        });
        expect(result.current.name).toBe(target.value);
        expect(result.current.formState.name).toBe(target.value);
    });

    test('should reset the data', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const targetName = {name: 'name', value: 'Julian'};

        act(() => {
            result.current.onInputChange({target: targetName});
            result.current.onResetForm();
        });
        
        expect(result.current.name).toBe(initialForm.name);
    });
});
