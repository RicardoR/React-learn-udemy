import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          className="auth__input"
          autoComplete="off"
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
