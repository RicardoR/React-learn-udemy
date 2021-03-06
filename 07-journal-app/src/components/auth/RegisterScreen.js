import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError: error, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChanges] = useForm({
    name: 'Ricardo',
    email: 'email@gmail.com',
    password: '123456',
    confirmPassword: '123456',
  });

  const { name, email, password, confirmPassword } = formValues;

  const handeRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    }

    if (validator.isEmail(email) === false) {
      dispatch(setError('Invalid email'));
      return false;
    }

    if (password.length < 5) {
      dispatch(setError('Password must be at least 5 characters'));
      return false;
    }

    if (password !== confirmPassword) {
      dispatch(setError('Passwords do not match'));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handeRegister}
      >
        {error && <p className="alert-error mb-5">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChanges}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChanges}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChanges}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          className="auth__input"
          autoComplete="off"
          value={confirmPassword}
          onChange={handleInputChanges}
        />
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block mb-5 mt-1"
        >
          Register
        </button>
        <div></div>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
