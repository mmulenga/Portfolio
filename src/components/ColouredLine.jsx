import React from 'react';
import './ColouredLine.css';

function ColouredLine(props) {
  const { position, colorScheme } = props;
  const scheme = { color: colorScheme, backgroundColor: colorScheme };

  return (
    <hr className={`colored-line ${position}`} style={scheme} />
  );
}

export default ColouredLine;
