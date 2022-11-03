import {renderHook} from "@testing-library/react";
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
});
