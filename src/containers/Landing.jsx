import React from 'react';
import Portrait from '../components/Portrait';
import Name from '../components/Name';
import './Landing.css';

function Landing(props) {
  const { forwardedRef, colorScheme } = props;

  return (
    <div ref={forwardedRef} className="landing">
      <Portrait />
      <Name colorScheme={colorScheme} />
    </div>
  );
}

export default React.forwardRef((props, ref) => <Landing forwardedRef={ref} {...props} />);
