import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { UserContext } from './UserContext';

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <div className="container">
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};
