import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('useForm test', () => {
  const initialForm = {
    name: 'Ricardo',
    email: 'mail@mail.com',
  };

  test('should return the default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(handleInputChange).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });

  test('should change the form value (the name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    const newData = {
      target: {
        name: 'name',
        value: 'Ricardo actualizado',
      },
    };

    act(() => handleInputChange(newData));

    const [formValues] = result.current;

    expect(formValues).toEqual({ ...initialForm, name: newData.target.value });
  });

  test('should restore the form with reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    const newData = {
      target: {
        name: 'name',
        value: 'Ricardo actualizado',
      },
    };

    act(() => {
      handleInputChange(newData);
      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
