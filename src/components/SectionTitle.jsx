import React from 'react';
import ColouredLine from './ColouredLine';
import './SectionTitle.css';

function SectionTitle(props) {
  const { name, position } = props;

  return (
    <div className={position}>
      <h2 className="SectionTitleText">
        {name}
      </h2>
      <ColouredLine />
    </div>
  );
}

export default SectionTitle;
