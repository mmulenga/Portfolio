import React from 'react';
import './NavButton.css';

function NavButton(props) {
  const { handleClick, id, children } = props;

  function handleClickEvent(e) {
    e.stopPropagation();
    handleClick(id);
  }

  return (
    <button onClick={handleClickEvent} className="NavButton" type="button">
      {children}
    </button>
  );
}

export default NavButton;
