import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { MainApp } from './MainApp';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="login" element={<LoginScreen />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<HomeScreen />} />
        </Route>
      </Routes>
    </div>
  );
};
