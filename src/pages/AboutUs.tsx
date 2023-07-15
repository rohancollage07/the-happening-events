
// import './AboutUs.css'


import { useState } from 'react';
import Footer from '../components/Footer';
import './Main.css'

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
    <div className='bg-black'>
      <section className="full-length ">
        <div className="full-length-photo">
          <img
            src='./src/pages/Images/EV.webp'
            alt="Full Length"
          />
          <div className="Happening-name">
            <h1>The Happening Events</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="Main-head ">
          <h1>Why host with us</h1>
          <h2>
            The happening event management platform is the perfect solution for
            anyone looking to host a successful event, regardless of its size.
            This includes custom mobile apps and onsite solutions, as well as
            the ability to host immersive virtual events that will truly engage
            attendees.
          </h2>
        </div>
        <div className="photo-row">
          <div className="photo-box">
            <img src= '/src/pages/Images/photo1.jpg' alt="Photo 1" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo2.jpg" alt="Photo 2" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo3.jpg" alt="Photo 3" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo4.jpg" alt="Photo 4" />
          </div>
        </div>
      </section>
      <section>
        <div className="Main-head">
          <h1>Outcome & Objective</h1>
        </div>
        <div className="photo-row">
          <div className="photo-box">
            <img src="/src/pages/Images/photo5.jpeg" alt="Photo 1" />
            <h1>Team Building</h1>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo6.jpeg" alt="Photo 2" />
          <h1>Critical Thinking</h1>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo7.jpeg" alt="Photo 3" />
          <h1>Ice breaking</h1>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/photo8.jpeg" alt="Photo 4" />
          <h1>Entertainment</h1>
          
          </div>
        </div>
      </section>
      <section>
        <div className="Main-head">
          <h1>Our Team</h1>
        </div>
        <div className="Team-container">
          <div className="Team-text">
            <h1>Management Team</h1>
            <p>
              The management team, a cohesive force, Guides the company's
              course, staying on course. <br /> With diverse skills and
              expertise they possess, They lead with vision, ensuring success.
            </p>
          </div>
          <img src="/src/pages/Images/Management.webp" alt="Team1" />
        </div>
        <div className="Team-container">
          <div className="Team-text">
            <h1>Design Team</h1>
            <p>
              The design team, a creative force at play, Brings ideas to life in
              a remarkable way. With an eye for detail and a passion for art,
              They craft beautiful designs, setting them apart.
            </p>
          </div>
          <img src="/src/pages/Images/Design.png" alt="Team1" />
        </div>
        <div className="Team-container">
          <div className="Team-text">
            <h1>Marketing Team</h1>
            <p>
              The marketing team, masters of promotion, Craft strategies to
              create a strong devotion. With market insights and persuasive
              flair, They spread the brand's message, reaching everywhere.
            </p>
          </div>
          <img src="/src/pages/Images/Marketing.jpg" alt="Team1" />
        </div>
      </section>

      {/* Contact Page starts here  */}

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
    </div>
     {/* footor Starts here */}
      
    <Footer/>

    </div>
  )
}

export default App
