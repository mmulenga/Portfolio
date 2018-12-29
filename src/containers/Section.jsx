import React from 'react';
import './Section.css';

function Section(props) {
  const { children } = props;

  return (
    <div className="Section">
      {children}
    </div>
  );
}

export default Section;
