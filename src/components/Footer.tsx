import '../pages/Main.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Address and Phone Number</h3>
        <p>123 Main Street, City, Country</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>
              {' '}
              <Link to="/about-us">About Us</Link>
            </li>
          </a>
          <a href="">
            <li>
              <Link to="/Events">Events</Link>
            </li>
          </a>
          <a href="">
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </a>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social Media Links</h3>
        <ul>
          <a href="">
            <li>FaceBoook</li>
          </a>
          <a href="">
            <li>Twitter</li>
          </a>
          <a href="">
            <li>Instagram</li>
          </a>
          <a href="">
            <li>LinkedIn</li>
          </a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
