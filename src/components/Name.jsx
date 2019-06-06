import React from 'react';
import ColouredLine from './ColouredLine';
import './Name.css';

function Name(props) {
  const { colorScheme } = props;

  return (
    <div className="name-container">
      <h1 className="name"> Matt Mulenga </h1>
      <ColouredLine position="center" colorScheme={colorScheme} />
      <h2 className="title"> Software Developer | B. Sc. </h2>
    </div>
  );
}

export default Name;
