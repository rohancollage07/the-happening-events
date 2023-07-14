import { Link } from 'react-router-dom'
import '../pages/Main.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        <Link to="/">THE HAPPENING EVENTS</Link>
      </span>
      <ul className="links">
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
