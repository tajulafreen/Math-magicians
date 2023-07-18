import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navigation() {
  return (
    <>
      <header>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
      </header>
    </>
  );
}
export default Navigation;
