import { Link } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Navbar.js

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/" className='nav-link'>Home</Link></li>
          <li><Link to="/about-us" className='nav-link'>About</Link></li>
          <li><Link to="/contact" className='nav-link'>Contact</Link></li>
        </ul>
        {/* <a href="/">Cincy Finds</a>
        <a href="/" element={<Home />}>Home</a>
        <a href="/about-us" element={<About />}>About Us</a>
        <a href="#section-contact">Contact Us</a> */}

        <div class="dropdown">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
            <ul>
              <li><Link to="/nightlife" className='nav-link'>Nightlife</Link></li>
              <li><Link to="/food&drinks" className='nav-link'>Food/Drinks</Link></li>
              <li><Link to="/categories/forecast" className='nav-link'>Forecast</Link></li>
              <li><Link to="/categories/parking" className='nav-link'>Parking</Link></li>
              <li><Link to="/history" className='nav-link'>History</Link></li>
              <li><Link to="/sports" className='nav-link'>Sports</Link></li>
            </ul>
            {/* <a href="#section-nightlife">Nightlife</a>
            <a href="#section-food">Food/Drinks</a>
            <a href="#section-forecast">Forecast</a>
            <a href="#section-parking">Parking</a>
            <a href="#section-history">History</a>
            <a href="#section-sports">Sports</a> */}
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;