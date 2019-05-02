import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/at-solid.svg';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <img className="MediaButton" src={email} alt="Send me an email!" />
      <img className="MediaButton" src={github} alt="My Github account." />
      <img className="MediaButton" src={linkedin} alt="My LinkedIn account." />
    </div>
  );
}

export default Contact;
