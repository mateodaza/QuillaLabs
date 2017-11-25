import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/Navbar.css';

class Navbar extends Component {

myFunction(e){
	e.preventDefault();
 	var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  render() {
    return (
    <div>
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to QuillaLabs</h1>
          <p> Site under construction </p>
        </header>
    	
        <div className="topnav" id="myTopnav">
  			  <a href="#myTopnav" className="active">QuillaLabs</a>
  			  <a href="#projects"> Projects </a>
  			  <a href="#about"> About </a>
  			  <a style={{fontSize:15, leftMargin: 5}} className="icon" onClick={this.myFunction.bind(this)}>&#9776;</a>
		    </div>

    </div>
    );
  }
}

export default Navbar;
