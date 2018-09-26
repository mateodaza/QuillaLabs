import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/v0/Navbar.jsx';
import Home from './components/v0/Home.jsx';
import Footer from './components/v0/Footer.jsx';
import MainView from './components/promo-version1/homeview'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar />
        <Home />    
        <Footer /> */}
        <MainView />
      </div>
    );
  }
}

export default App;
