// @flow

import * as React from 'react';
import './ColouredLine.css';

type Props = {
  justify: string,
  colorScheme: string
};

function ColouredLine(props: Props) {
  const { justify, colorScheme } = props;
  const scheme = { color: colorScheme, backgroundColor: colorScheme };

  return <hr className={`colored-line ${justify}`} style={scheme} />;
}

export default ColouredLine;
