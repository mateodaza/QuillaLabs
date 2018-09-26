import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles/App.css';
import '../../styles/Navbar.css';

class Navbar extends Component {

myFunction(e){
	e.preventDefault();
 	var x = document.getElementById("home");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  render() {
    return (
    <div className="navbarDiv">
    {
      /*
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to QuillaLabs</h1>
          <p> Site under construction </p>
        </header>
      */
    }
    	
        <div className="topnav" id="home">
          <div className="iconDiv">
          <img src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
         </div>
  			  <a href="#home" className="active">Home</a>
  			  <a href="#projects"> Projects </a>
          <a href="#blog"> Blog </a>
  			  <a href="#about"> About </a>
  			  <a style={{fontSize:15, leftMargin: 5}} className="icon" onClick={this.myFunction.bind(this)}>&#9776;</a>
		    </div>

    </div>
    );
  }
}

export default Navbar;
