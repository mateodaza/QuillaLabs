import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />    
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
