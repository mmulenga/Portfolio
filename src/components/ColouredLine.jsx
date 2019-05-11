import React from 'react';
import './ColouredLine.css';

function ColouredLine(props) {
  const { position } = props;

  return (
    <hr className={`ColouredLine ${position}`} />
  );
}

export default ColouredLine;
