import React from 'react';
import ColouredLine from './ColouredLine';
import './Name.css';

function Name() {
  return (
    <div className="NameContainer">
      <h1 className="Name"> Matt Mulenga </h1>
      <ColouredLine />
      <h2 className="Title"> Software Developer | Student </h2>
    </div>
  );
}

export default Name;
