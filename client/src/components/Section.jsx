// @flow

import React from 'react';
import './Section.css';

type Props = {
  forwardedRef: any,
  type: string,
  children: any,
}

function Section(props: Props) {
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
