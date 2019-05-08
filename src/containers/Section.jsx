import React from 'react';
import './Section.css';

function Section(props) {
  const { children, type } = props;

  return (
    <div className={`Section ${type}`}>
      {children}
    </div>
  );
}

export default Section;
