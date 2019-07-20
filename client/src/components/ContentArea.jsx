// @flow

import React from 'react';
import './ContentArea.css';

type Props = {
  forwardedRef: any,
  setTargetSection: any,
  children: any,
}

function ContentArea(props: Props) {
  const { forwardedRef, setTargetSection, children } = props;

  function handleScroll() {
    setTargetSection(forwardedRef.current.scrollTop);
  }

  return (
    <div ref={forwardedRef} className="content-area" onScroll={handleScroll}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <ContentArea forwardedRef={ref} {...props} />
));
