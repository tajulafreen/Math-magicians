import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navbar';

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
export default Layout;
