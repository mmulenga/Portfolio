import React from 'react';
import './SocialMediaButton.css';

function SocialMediaButton(props) {
  const { children, label, position, colorScheme } = props;

  return (
    <div className={`MediaButton ${position} ${colorScheme}`}>
      <a href="/">
        {children}
      </a>
      <p className="Label">
        {label}
      </p>
    </div>
  );
}

export default SocialMediaButton;
