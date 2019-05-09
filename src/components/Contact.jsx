import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <form className="Contact">
      <p className="ContactText">Your email address</p>
      <input className="SenderEmail" type="text" />
      <p className="ContactText">Message</p>
      <textarea className="EmailBox" />
      <input className="SendButton" type="submit" value="Send" />
    </form>
  );
}

export default Contact;
