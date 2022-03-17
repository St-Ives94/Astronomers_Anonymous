import React from 'react';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import GoogleMap from './components/pages/Map/Map'
import Footer from './components/pages/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Route path="/" exact component={Home} />
      <Switch>
        <Route exact path="/observatory-map" component={GoogleMap} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
