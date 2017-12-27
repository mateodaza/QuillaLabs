import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {

  render() {
    return (
    <div className="footer">
    	<div className="footerDiv">

        <div className="greenDiv"></div>

        <div className="navBox navBoxBorder">
          <a href="#home"><h4>Home</h4></a>
          <a href="#projects"> <h4>Projects</h4> </a>
          <a href="#blog"> <h4>Blog</h4> </a>
          <a href="#about"> <h4>About</h4> </a>
        </div>

        <div className="subsection1">
            <div className="mainQBox">
              <div className="iconDivFooter">
                <img alt="quillalabs" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                <h2> QuillaLabs </h2>
              </div>
              <div className="mainTextBox">
                <p> 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in
                </p>
              </div>

            </div>

            <div className="contactBox">
              <h3> CONTACT US </h3>
              
              <div className="miniIcon">
                <img alt="quillalabs" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                <h5> blah@gmail.com </h5>
              </div>
              <div className="miniIcon">
                <img alt="quillalabs" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                <h5> Blockchain Street 123 </h5>
              </div>
              <div className="miniIcon">
                <img alt="quillalabs" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                <h5> +57 3322101203 </h5>
              </div>
    
            </div>
        </div>

        <div className="navBox socialBar">
              <div className="iconDivFooter">
                <a href="https://www.facebook.com">
                  <img alt="facebook"  href="" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                </a>
              </div>
              <div className="iconDivFooter">
                <a href="https://www.twitter.com">
                  <img alt="twitter" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                </a>
              </div>
              <div className="iconDivFooter">
                <a href="https://www.instagram.com">
                  <img alt="instagram" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg' width='6.3%' height='6.3%' ></img>
                </a>
              </div>
        </div>

        <div className="navBox socialBar copyright">
          <p> Copyright © 2018 Design M&G </p>
        </div>
        
    	</div>
    </div>
    );
  }
}

export default Footer;
