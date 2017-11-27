import React, { Component } from 'react';
import '../styles/Home.css';
import {getArticles} from '../Helpers.js';

class Home extends Component {
	constructor(props){
	    super(props);
	    this.state={
	        articles: []
	    }
	}

	componentDidMount(){
		getArticles().then( (snapshot) => {
			this.setState({articles: snapshot});
		});
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
			{
				this.state.articles.length !== 0 ? (
					this.state.articles.map((stuff)=>{
						return <div id={stuff.id} className="mediumCard">
					       <blockquote className="embedly-card">
						    <h4><a href={stuff.url}>{stuff.title}</a></h4>
						    <p>
						      {stuff.desc}
						    </p>
						  </blockquote>
					  	</div>
					})
				):(
					<div style={{width:'80%'}}>
		 				<h3>
		 					No Content
		 				</h3>
					</div>
				)
			}
	    </div>
	    <div className="homeSection aboutDiv" id="about">
	        <h1> About Us </h1>
	    </div>
    </div>
    );
  }
}

export default Home;
