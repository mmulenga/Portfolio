import React from 'react';
import ColouredLine from './ColouredLine';
import './SectionTitle.css';

function SectionTitle(props) {
  const { name, justify, colorScheme } = props;

  return (
    <h2 className={`section-title ${justify}`}>
      {name}
      <ColouredLine justify={justify} colorScheme={colorScheme} />
    </h2>
  );
}

export default SectionTitle;
