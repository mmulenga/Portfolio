// @flow
import React from 'react';
import './NavButton.css';

type Props = {
  id: string,
  aria: string,
  style: any,
  children: any,
  handleClick: any,
}

function NavButton(props: Props) {
  const { id, aria, style, children, handleClick } = props;

  function handleClickEvent(target, e) {
    e.stopPropagation();
    handleClick(target);
  };

  return (
    // preventDefault() to get rid of focus when clicking on buttons, maintains accessibility when using keyboard.
    <button
      id={id}
      onClick={e => handleClickEvent(e.target, e)}
      onMouseDown={e => e.preventDefault()}
      className="nav-button"
      aria-label={aria}
      type="button"
      style={style}
    >
      {children}
    </button>
  );
}

export default NavButton;
