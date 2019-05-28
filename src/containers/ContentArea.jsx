import React from 'react';
import './ContentArea.css';

function ContentArea(props) {
  const { forwardedRef, setTargetSection, children } = props;

  function handleScroll() {
    setTargetSection(forwardedRef.current.scrollTop);
  }

  return (
    <div ref={forwardedRef} className="Content-Area" onScroll={handleScroll}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => <ContentArea forwardedRef={ref} {...props} />);
