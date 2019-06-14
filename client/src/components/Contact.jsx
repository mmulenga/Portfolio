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
  const [senderEmail, setSenderEmail] = useState('');
  const [emailBody, setEmailBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (senderEmail !== '' && emailBody !== '') {
      axios({
        method: 'POST',
        url: 'http://localhost:9000/',
        data: {
          email: senderEmail,
          message: emailBody,
        }
      }).then((response) => {
        if (response.data.msg === 'success') {
          alert('Message sent.');
        } else {
          alert('Message failed to send.');
        }
      });
    }
  }

  return (
    <form className="contact" onSubmit={(e) => handleSubmit(e)}>
      <p className="contact-text">Your email address</p>
      <input
        className="sender-email"
        type="text"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
      />
      <p className="contact-text">Message</p>
      <textarea
        className="email-box"
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
