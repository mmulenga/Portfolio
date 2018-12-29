import React from 'react';
import NavButton from './NavButton';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
    </div>
  );
}

export default Navbar;
