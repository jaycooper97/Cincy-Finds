//React Router v6 App
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, /*Link*/ } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Navbar';
//import Footer from './Footer';
import Contact from './Contact';
import Food from './Food';
import Home from './Home';
import './App.css';
import './Home.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            {<Home />}
            {<Navbar />}
            <br />
            {/* <Footer /> */}



          {/*Routes tag goes after rendered components*/}
          <Routes>
            {/*<Route exact path='/' element={<Home />} />*/}
            <Route exact path='Contact/' element={<Contact />} />
            <Route path='Food/' element={<Food />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
