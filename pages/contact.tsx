import React from 'react';
import { useState } from 'react';

const Contact: any = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };

  return (
      
      <main>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </main>
  );
}

export default Contact;