// Write your JS code here1
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="bg-header">
    <div className="bg-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1>Wave</h1>
    </div>
    <ul className="bg-list">
      <li>
        <Link className="bg-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="bg-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="bg-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
