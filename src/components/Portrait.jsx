import React from 'react';
import me from '../images/me.jpg';
import './Portrait.css';

function Portrait() {
  return (
    <img className="Portrait" src={me} alt="It's me Matt!" />
  );
}

export default Portrait;
