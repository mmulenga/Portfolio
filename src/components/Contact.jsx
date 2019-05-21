import React from 'react';
import './Contact.css';

function Contact(props) {
  const { colorScheme } = props;
  const scheme = { backgroundColor: colorScheme };

  return (
    <form className="Contact">
      <p className="ContactText">Your email address</p>
      <input className="SenderEmail" type="text" />
      <p className="ContactText">Message</p>
      <textarea className="EmailBox" />
      <input className="SendButton" style={scheme} type="submit" value="Send" />
    </form>
  );
}

export default Contact;
