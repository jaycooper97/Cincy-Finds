// Navbar.js

function Navbar() {
    return (
      <nav>
        <a href="#home">Cincy Finds</a>
        <a href="#section-home">Home</a>
        <a href="#section-about">About Us</a>
        <a href="#section-contact">Contact Us</a>
  
        <div class="dropdown">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
            <a href="#section-nightlife">Nightlife</a>
            <a href="#section-food">Food/Drinks</a>
            <a href="#section-forecast">Forecast</a>
            <a href="#section-parking">Parking</a>
            <a href="#section-history">History</a>
            <a href="#section-sports">Sports</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;