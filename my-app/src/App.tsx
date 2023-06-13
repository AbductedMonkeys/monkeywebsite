import React from 'react';
import Navbar from './Navbar';
import './App.css';


function App() {
  return (
    <>
    <Navbar />
    <>
      <div className="body">
        <h1>ABOUT</h1>

        <p>Abducted Monkeys is a small team of students developing our indie action game <a className="TiTTLink" href="./tornadotown.html">Trouble in Tornado Town</a>. We strive to develop compact, enjoyable experiences for players of all skill levels.</p>
        <p>All of our developers are currently studying Game Design and Production at Drexel University. Trouble in Tornado Town was developed during the 3rd year of our studies and we owe a great deal of gratitude to our professors at Drexel's Entrepreneurial Game Studio for their advice and industry know-how.</p>
        <div className="peopleList">
          <div className="namesTeam">
            <p>
              Abducted Monkeys is:<br /><br />
              Spencer Cohen<br />
              Joshua Pelkington<br />
              Tom Giagtzoglou<br />
              Joi Saito<br />
              Dan Guadalupe<br />
              Brian Glogower<br />
              Jordan Gerhardt<br />
              Matt Miholics<br />
              Alex Jasmin<br />
            </p>
          </div>

          <div className="namesMent">
            <p>
              Mentored by:<br /><br />
              Tony Rowe<br />
              Frank Lee<br />
            </p>
          </div>
        </div>

      </div>
    </></>
    
  );
}

export default App;
