// @flow

import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

type Props = {
  colorScheme: string
};

function Contact(props: Props) {
  const { colorScheme } = props;
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [emailBody, setEmailBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (senderEmail === '') {
      alert('Please enter your email address.');
    } else if (emailBody === '') {
      alert('Please enter a message.');
    } else {
      axios({
        method: 'POST',
        url: 'https://mattmulenga.com/mail',
        data: {
          name: senderName,
          email: senderEmail,
          message: emailBody,
        }
      }).then((response) => {
        if (response.data.msg === 'success') {
          alert('Message sent.');
        } else {
          alert('Message failed to send. Please try again later.');
        }
      });
    }
  }

  return (
    <form className="contact" id="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="sender-name"
        placeholder="Name"
        type="text"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
      />
      <input
        className="sender-email"
        placeholder="Email"
        type="text"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
      />
      <textarea
        className="email-box"
        placeholder="Message"
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
      />
      <input
        className="send-button"
        style={{ backgroundColor: colorScheme }}
        type="submit"
        value="Send"
      />
    </form>
  );
}

export default Contact;
