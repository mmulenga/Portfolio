import React from 'react';
import me from '../images/me.jpg';
import './Portrait.css';

function Portrait() {
  return (
    <img className="portrait" src={me} alt="It's me Matt!" />
  );
}

export default Portrait;
