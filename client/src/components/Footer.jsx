// @flow

import * as React from 'react';
import './Footer.css';

type Props = {
  colorScheme: string
};

function Footer(props: Props) {
  const { colorScheme } = props;

  return (
    <p className="footer-name">
      Matthew Mulenga
      <span className="footer-copy" style={{ color: colorScheme }}>
        {" "}
        &#169; 2019
      </span>
    </p>
  );
}

export default Footer;
