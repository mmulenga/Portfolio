// @flow

import React from 'react';
import './SocialMediaButton.css';

type Props = {
  children: any,
  aria: string,
  label: string,
  position: string,
  colorScheme: string,
  href: string,
}

function SocialMediaButton(props: Props) {
  const { children, aria, label, position, colorScheme, href } = props;

  return (
    <div className={`media-button ${position} ${colorScheme}`}>
      <a href={href} aria-label={aria} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <p className="label">{label}</p>
    </div>
  );
}

export default SocialMediaButton;
