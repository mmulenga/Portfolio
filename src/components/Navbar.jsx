import React from 'react';
import home from '../images/home.svg';
import projects from '../images/scatter.svg';
import about from '../images/person.svg';
import contact from '../images/email.svg';
import NavButton from './NavButton';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <NavButton>
        <object data={home} type="image/svg+xml" aria-label="Home" />
      </NavButton>
      <NavButton>
        <object data={projects} type="image/svg+xml" aria-label="Home" />
      </NavButton>
      <NavButton>
        <object data={about} type="image/svg+xml" aria-label="Home" />
      </NavButton>
      <NavButton>
        <object data={contact} type="image/svg+xml" aria-label="Home" />
      </NavButton>
    </div>
  );
}

export default Navbar;
