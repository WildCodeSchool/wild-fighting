import React from 'react';
import { Link } from 'react-router-dom';
import './WinnerPage.css';
import trophy from './trophy2.0.png';
import mewtwo from './150Mewtwo.png';
import returnArrow from './return.png';

function Winner() {
  return (
    <div className="winner-result">
      <div className="roll-in-blurred-left">
        <img className="trophy" alt="#" src={trophy} />
      </div>
      <div className="v-1">
        <div className="slide-in-blurred-top">
          <h1 className="win-result-title">victory</h1>
        </div>
        <div className="rotate-in-center">
          <img className="winner-pokemon" src={mewtwo} alt="pokemon winner" />
        </div>
        <div className="option">
          <div className="bounce-in-bottom">
            <Link to="/"><img className="arrow-w" src={returnArrow} alt="returnarrow" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winner;