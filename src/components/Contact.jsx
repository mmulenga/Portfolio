import React from 'react';
import './Contact.css';

function Contact(props) {
  const { colorScheme } = props;
  const scheme = { backgroundColor: colorScheme };

  return (
    <form className="contact">
      <p className="contact-text">Your email address</p>
      <input className="sender-email" type="text" />
      <p className="contact-text">Message</p>
      <textarea className="email-box" />
      <input className="send-button" style={scheme} type="submit" value="Send" />
    </form>
  );
}

export default Contact;
