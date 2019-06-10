import React from 'react';
import './ColouredLine.css';

function ColouredLine(props) {
  const { justify, colorScheme } = props;
  const scheme = { color: colorScheme, backgroundColor: colorScheme };

  return (
    <hr className={`colored-line ${justify}`} style={scheme} />
  );
}

export default ColouredLine;
