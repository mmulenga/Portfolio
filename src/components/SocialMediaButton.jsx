import React from 'react';
import './SocialMediaButton.css';

function SocialMediaButton(props) {
  const { children, label, position, colorScheme, href } = props;

  return (
    <div className={`MediaButton ${position} ${colorScheme}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <p className="Label">
        {label}
      </p>
    </div>
  );
}

export default SocialMediaButton;
