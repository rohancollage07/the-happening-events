import { useState } from 'react';
import './Events.css'
import Footer from '../components/Footer';

// import 'bootstrap/dist/css/bootstrap.css'
// import React from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Process form submission here
    // You can access the values of name, email, and message from the state variables
  };

  return (
    <div className="Contact">
    <h1 className='Contact-us'>Contact Us</h1>
    <h1 className='Happen-Cont'>The Happening Events</h1>

    <div className="form-container">
      
      <div className="form-left">
        <form onSubmit={handleSubmit}>
          <input
          className='NameInput'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
          className='email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <textarea
          className='msg'
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
      <div className="form-right">
        <img src="/src/pages/Images/Contact.jpg" alt="Vertical Image" />
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default App
