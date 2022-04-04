import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 123,
      name: 'John Doe',
    });
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
};
