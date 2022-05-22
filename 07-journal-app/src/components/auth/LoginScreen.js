import React, { useState } from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  startLoginWithEmailPassword,
  startGoogleLogin,
} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(undefined);
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'email@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginWithEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    if (!loading) {
      dispatch(startGoogleLogin());
    }
  };

  const isFormValid = () => {
    if (!email || !password) {
      setError('All fields are required');
      return false;
    }

    if (!validator.isEmail(email)) {
      setError('Invalid email');
      return false;
    }

    if (password.length < 5) {
      setError('Password must be at least 5 characters');
      return false;
    }

    setError(undefined);
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form onSubmit={handleLogin}>
        {(error || msgError) && (
          <p className="alert-error mb-5">{error || msgError}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block mb-5 mt-1"
        >
          Login
        </button>
        <div>
          <p className="mb-5">Login with social networks</p>

          <div className="google-btn mb-5" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};
