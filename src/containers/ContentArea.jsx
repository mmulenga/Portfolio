import React from 'react';
import './ContentArea.css';

function ContentArea(props) {
  const { children } = props;

  return (
    <div className="Content-Area">
      {children}
    </div>
  );
}

export default ContentArea;
