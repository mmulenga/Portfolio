import React from 'react';
import ColouredLine from './ColouredLine';
import './Name.css';

function Name() {
  return (
    <div className="NameContainer">
      <h1 className="Name"> Matt Mulenga </h1>
      <ColouredLine position="Center" />
      <h2 className="Title"> Software Developer | B. Sc. </h2>
    </div>
  );
}

export default Name;
