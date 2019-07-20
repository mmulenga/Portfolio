// @flow

import React from 'react';
import Portrait from './Portrait';
import Name from './Name';
import './Landing.css';

type Props = {
  forwardedRef: any,
  colorScheme: any,
}

function Landing(props: Props) {
  const { forwardedRef, colorScheme } = props;

  return (
    <div ref={forwardedRef} className="landing">
      <Portrait />
      <Name colorScheme={colorScheme} />
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Landing forwardedRef={ref} {...props} />
));
