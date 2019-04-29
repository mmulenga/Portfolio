import React from 'react';
import './ProjectButton.css';
import me from '../images/me.jpg';

function ProjectButton(props) {
  const { name } = props;

  return (
    <img className={name} src={me} alt="It's me Matt!" />
  );
}

export default ProjectButton;
