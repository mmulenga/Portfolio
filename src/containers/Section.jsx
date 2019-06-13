import React from 'react';
import './Section.css';

function Section(props) {
  const { forwardedRef, type, children } = props;

  return (
    <div ref={forwardedRef} className={type}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Section forwardedRef={ref} {...props} />
));
