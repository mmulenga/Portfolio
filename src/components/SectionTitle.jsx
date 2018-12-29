import React from 'react';
import ColouredLine from './ColouredLine';

function SectionTitle(props) {
  const { name } = props;

  return (
    <div className="SectionTitle">
      <h2 className="Title">
        {name}
      </h2>
      <ColouredLine />
    </div>
  );
}

export default SectionTitle;
