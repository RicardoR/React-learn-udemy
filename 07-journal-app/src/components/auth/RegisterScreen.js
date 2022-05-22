import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const [formValues, handleInputChanges] = useForm({
    name: 'Ricardo',
    email: 'email@gmail.com',
    password: '123456',
    confirmPassword: '123456',
  });

  const { name, email, password, confirmPassword } = formValues;

  const handeRegister = (e) => {
    e.preventDefault();
  };

  const isFormValid = () => {
    if (password !== confirmPassword) {
      return false;
    }
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handeRegister}>
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
        <button type="submit" className="btn btn-primary btn-block mb-5 mt-1">
          Login
        </button>
        <div></div>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
