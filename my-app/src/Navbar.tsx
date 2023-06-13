import React from 'react';
import './App.css';
import monkeyTrans from './Monkey_trans.png';

function Navbar() {
  return (
    <div className = "navbar" id = "navbar">
        <div className = "active">
            <a href = "./index.html" className = "logo" ><img className = "logo" src={monkeyTrans} /></a>
        </div>    
      <div id = "navList" className="navMenu">
        <div className = "menuItem">
          <a href="./tornadotown.html">Trouble in Tornado Town</a>
        </div>
        <div className = "menuItem">
          <a href="./index.html">About us</a>
        </div>
      </div>
    <div id = "navToggle" className="menuIcon">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    </div>
   
  );
}

export default Navbar;
