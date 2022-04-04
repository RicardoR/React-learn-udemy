import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { UserContext } from './UserContext';

export const MainApp = () => {
  const user = {
    id: 123,
    name: 'Ricardo',
    email: 'email@email.com',
  };
  return (
    <div>
      <UserContext.Provider value={user}>
        <Navbar />
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};
