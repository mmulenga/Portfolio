import React from 'react';
import './SocialMediaButton.css';

import { ReactComponent as EmailIcon } from '../images/at-solid.svg';
import { ReactComponent as GitIcon } from '../images/github.svg';
import { ReactComponent as LinkedIcon } from '../images/linkedin.svg';

function SocialMediaButton(props) {
  const { label, position } = props;

  if (label === 'Email') {
    return (
      <div className={`MediaButton ${position}`}>
        <EmailIcon className="Icon" />
        <p className="Label">
          {label}
        </p>
      </div>
    );
  }

  if (label === 'GitHub') {
    return (
      <div className={`MediaButton ${position}`}>
        <GitIcon className="Icon" />
        <p className="Label">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`MediaButton ${position}`}>
      <LinkedIcon className="Icon" />
      <p className="Label">
        {label}
      </p>
    </div>
  );
}

export default SocialMediaButton;
