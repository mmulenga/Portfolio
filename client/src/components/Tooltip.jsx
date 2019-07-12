// @flow

import * as React from 'react';
import './Tooltip.css';

type Props = {
  children: any,
}

function Tooltip(props: Props) {
  const { children, style } = props;

  return (
    <div className="tooltip" style={style}>
      {children}
    </div>
  );
}

export default Tooltip;
