import React, { Component } from 'react';
import '../../styles/Home.css';

class Home extends Component {
	constructor(props){
	    super(props);
	    this.state={
	        articles: []
	    }
	}

  render() {
    return (
    <div>
       <div className="homeDiv">
       
	    </div>
	    <div className="homeSection projectsDiv" id="projects">
	       <h1> Projects </h1>
	    </div>
	    <div className="homeSection blogDiv" id="blog">
 			<div style={{width:'80%'}}>
 				<h1 style={{display: 'inline'}}> Blog </h1>
 				<p>
 					Our opinion 
 				</p>
			</div>
	    </div>
	    <div className="homeSection aboutDiv" id="about">
	        <h1> About Us </h1>
	    </div>
    </div>
    );
  }
}

export default Home;