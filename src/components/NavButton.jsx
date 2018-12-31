import React from 'react';
import './NavButton.css';

function NavButton(props) {
  const { children } = props;

  return (
    <button className="NavButton" type="button">
      {children}
    </button>
  );
}

export default NavButton;
