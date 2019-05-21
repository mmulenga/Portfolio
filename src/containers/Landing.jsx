import React from 'react';
import Portrait from '../components/Portrait';
import Name from '../components/Name';
import './Landing.css';

function Landing(props) {
  const { colorScheme } = props;

  return (
    <div className="Landing">
      <Portrait />
      <Name colorScheme={colorScheme} />
    </div>
  );
}

export default Landing;
