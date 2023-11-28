// Home.js

import React from 'react';
import Navbar from './Navbar';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div>
      <Navbar />
      <div className="title-container">
        <div className="title">Cincy Finds</div>
        <div className="subtitle">Cincinnati's treasure unveiled</div>
      </div>
    </div>
  );
}

export default Home;
