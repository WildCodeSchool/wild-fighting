import React from 'react';
import bang from './bang.png';
import pokeball from './pokeball-3dmin.png';
import './Loading.css';


function Loading() {
    return (
     <div className="container">
         <div className="title">
             <div className="logo">
                <h1 className="Loading__title">Wild Fighting</h1>
            </div>
        </div> 
        <div className="heartbeat">
            <img src={pokeball} alt="pokeball"/>
        </div> 
        <div className="picture">
            <img src={bang} alt="bang"/>
            <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div> 
        </div> 
    </div>
    );
  }

export default Loading;