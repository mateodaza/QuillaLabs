import React, { Component } from 'react';
import './homeview.css';

class HomeView extends Component {

  render() {
    return (
    <div>
      <div className="home-container">
				<img alt="ql-logo" className="ql-logo" src='https://rawgit.com/mateodaza/d83f885a899fc47a3ac7b3046dfb7c50/raw/ba7bb2dfe68eb129b240a1751a62aff1bb60c386/quillalogo.svg'></img>
        <div className="title-container">
          <h3>QuillaLabs</h3>
          <h4>Embajada Blockchain</h4>
          <h5> Barranquilla - Colombia </h5>
        </div>
        <div className="promo-container">
          <a href="https://www.meetup.com/es/Blockchain-on-Tour-Barranquilla/events/254238361/">
            <img alt="bot-logo"src="https://i.imgur.com/cOf5ARl.png" />
            <p>Inscríbete!</p>
          </a>
        </div>
        <div id="triangle-bottomright"></div>
        <div id="triangle-topright"></div>

      </div>
    </div>
    );
  }
}

export default HomeView;
