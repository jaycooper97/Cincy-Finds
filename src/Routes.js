// src/Routes.js
import React from 'react';
// import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'; // App
import Home from './components/Home';
import About from './components/About';

const Routes = () => {
  return (
    // App
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/parking" */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
