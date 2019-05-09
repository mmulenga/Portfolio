import React from 'react';
import './SocialMediaButton.css';

import { ReactComponent as EmailIcon } from '../images/envelope.svg';
import { ReactComponent as GitIcon } from '../images/github.svg';
import { ReactComponent as LinkedIcon } from '../images/linkedin.svg';

function SocialMediaButton(props) {
  const { label, position } = props;

  // Based on the provided label, select the appropriate icon.
  if (label === 'Email') {
    return (
      <div className={`MediaButton ${position}`}>
        <a href="/">
          <EmailIcon className="Icon" />
        </a>
        <p className="Label">
          {label}
        </p>
      </div>
    );
  }

  if (label === 'GitHub') {
    return (
      <div className={`MediaButton ${position}`}>
        <a href="/">
          <GitIcon className="Icon" />
        </a>
        <p className="Label">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`MediaButton ${position}`}>
      <a href="/">
        <LinkedIcon className="Icon" />
      </a>
      <p className="Label">
        {label}
      </p>
    </div>
  );
}

export default SocialMediaButton;
