import React from 'react';
import Portrait from '../components/Portrait';
import Name from '../components/Name';
import './Landing.css';

function Landing() {
  return (
    <div className="Landing">
      <Portrait />
      <Name />
    </div>
  );
}

export default Landing;
