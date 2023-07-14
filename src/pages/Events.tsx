import { useState, useRef } from 'react'
import './Main.css'
import Footer from '../components/Footer'
// import 'bootstrap/dist/css/bootstrap.css'
// import React from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const contactRef = useRef(null)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Process form submission here
    // You can access the values of name, email, and message from the state variables
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="bg-black">
      <section className="full-length ">
        <div className="full-length-photo">
          <img src="/src/pages/Images/EV2.jpg" alt="Full Length" />
          <div className="Rapid-name">
            <h1>Rapid Romance</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="whw-container">
          <div className="whw-text">
            <h1>What</h1>
            <p>
              "For Planners by planners" is our mantra. We are highly energetic
              and energizing youth.
            </p>
            <h1>How</h1>
            <p>
              We are a group of genZ people who are very much creative and have
              specialization in their required fields. We have also conducted
              many events and helped people to make their imagination alive
            </p>
            <h1>Why</h1>
            <p>
              We will help you to give your close family and friends function an
              extra touch to make it a memorable one. We are group of genZ
              people who are creative and innovative on the field. We'll
              implement your imagination alive.
            </p>
          </div>
          <img src="/src/pages/Images/EV3.jpg" alt="EV" />
        </div>
      </section>

      <section>
        <div className="Main-head ">
          <h1>Event Glimples</h1>
          <h2>
            Dating a way to help figure out who a potential life partner will
            be—and it can also help you understand others and yourself in
            relation to others. We all want a meaningful connection. There is a
            powerful longing in us for connection with others.
          </h2>
        </div>
        <div className="photo-row">
          <div className="photo-box">
            <img src="/src/pages/Images/p1.jpg" alt="Photo 1" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p2.jpg" alt="Photo 2" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p3.webp" alt="Photo 3" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p4.png" alt="Photo 4" />
          </div>
        </div>
        <div className="photo-row">
          <div className="photo-box">
            <img src="/src/pages/Images/p5.jpg" alt="Photo 1" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p6.jpg" alt="Photo 2" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p7.jpg" alt="Photo 3" />
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/p8.jpg" alt="Photo 4" />
          </div>
        </div>
      </section>
      <section>
        <div className="Main-head">
          <h1>Upcoming Events</h1>
        </div>
        <div className="photo-row">
          <div className="photo-box">
            <img src="/src/pages/Images/Birthday.jpg" alt="Photo 1" />
            <h1>Birthday</h1>
            <button onClick={handleContactClick}> Contact Us</button>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/Networking.jpg" alt="Photo 2" />
            <h1>Networking</h1>
            <button onClick={handleContactClick}> Contact Us</button>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/Seminar.jpg" alt="Photo 3" />
            <h1>Seminars</h1>
            <button onClick={handleContactClick}> Contact Us</button>
          </div>
          <div className="photo-box">
            <img src="/src/pages/Images/Club.jpeg" alt="Photo 4" />
            <h1>Clubbing</h1>
            <button onClick={handleContactClick}> Contact Us</button>
          </div>
        </div>
      </section>

      {/* Contact Page starts here  */}

      <div ref={contactRef} className="Contact">
        <h1 className="Contact-us">Contact Us</h1>
        <h1 className="Happen-Cont">The Happening Events</h1>
        <div className="form-container">
          <div className="form-left">
            <form onSubmit={handleSubmit}>
              <input
                className="NameInput"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="msg"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="form-right">
            <img src="/src/pages/Images/Contact.jpg" alt="Vertical Image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
