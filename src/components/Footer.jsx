import React from 'react';
import './Footer.css';

function Footer(props) {
  const { colorScheme } = props;
  const scheme = { color: colorScheme };

  return (
    <p className="FooterName">
      Matthew Mulenga
      <span className="FooterCopy" style={scheme}> &#169; 2019</span>
    </p>
  );
}

export default Footer;
