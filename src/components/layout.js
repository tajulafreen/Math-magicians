import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navbar';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);
export default Layout;
