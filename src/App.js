import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />    
        <Footer />
      </div>
    );
  }
}

export default App;
