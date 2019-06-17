// @flow
import React from 'react';
import './ProjectButton.css';

type Props = {
  className: string,
  key: string,
}

function ProjectButton(props: Props) {
  const { className, key, title, src, handleClick } = props;

  function handleClickEvent(key, e) {
    e.stopPropagation();
    handleClick(key, e);
  };

  return (
    <div
      className={`${className} project-button`}
      onClick={e => handleClickEvent(key, e)}
    >
      <button
        type="button"
        className="project-name"
      >
        <p> {title} </p>
      </button>
      <img
        className="project-image"
        src={src}
        alt="It's me Matt!"
      />
    </div>
  );
}

export default ProjectButton;
