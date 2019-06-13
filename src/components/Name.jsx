// @flow

import React from 'react';
import ColouredLine from './ColouredLine';
import './Name.css';

type Props = {
  colorScheme: string,
};

function Name(props: Props) {
  const { colorScheme } = props;

  return (
    <div className="name-container">
      <h1 className="name"> Matt Mulenga </h1>
      <ColouredLine justify="center" colorScheme={colorScheme} />
      <h2 className="title"> Software Developer | B. Sc. </h2>
    </div>
  );
}

export default Name;
