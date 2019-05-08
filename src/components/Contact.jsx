import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <form className="Contact">
      <input className="SenderEmail" type="text" />
      <textarea className="EmailBox" />
    </form>
  );
}

export default Contact;
