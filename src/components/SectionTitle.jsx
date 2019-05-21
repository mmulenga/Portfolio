import React from 'react';
import ColouredLine from './ColouredLine';
import './SectionTitle.css';

function SectionTitle(props) {
  const { name, position, colorScheme } = props;

  return (
    <div className={position}>
      <h2 className="SectionTitle">
        {name}
        <ColouredLine position={position} colorScheme={colorScheme} />
      </h2>
    </div>
  );
}

export default SectionTitle;
